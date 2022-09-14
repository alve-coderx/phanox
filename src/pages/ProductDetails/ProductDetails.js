import ProductDetailsStyled from "./ProductDetailsStyled.styled"
import {useParams} from 'react-router-dom'
import { Col, Container, Spinner } from "react-bootstrap"
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from "react"
import { getProduct } from "../../features/admin/adminSlice"
import Navbar from "../../Components/Navbar/Navbar"
import { Button, Rating } from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { products } from "../../fake/fake"
import { useContext } from "react"
import CartDataAPI from "../../cartDataAPI"
import getStripe from "../../stripe"
import axios from 'axios'
import { BACK_END_URL } from "../../constant"

const ProductDetails = () => {
  const { data, isLoading } = useSelector(state => state.product)
  const { cartData, setCartData } = useContext(CartDataAPI)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [productData, setProductData] = useState(data)
  const [imgSelected, setImgSelected] = useState('')
  const [ itemData, setItemData ] = useState({})

  useEffect(() => {
      dispatch(getProduct(id))
  }, [])

  useEffect(() => {
      setProductData(data?.data?.product)
      setImgSelected(data?.data?.product?.images[0])
      setItemData({
        productId: productData?.productId,
        title: productData?.title,
        price: productData?.price,
        discount: productData?.discount,
        images: productData?.images,
        rating: productData?.rating,
        quantity: 1,
      })
  }, [data, isLoading])

  const addItem = () => {
    const isFound = cartData.items.some(item => item.productId === itemData.productId )

    if ( !isFound ) {
      setCartData({items: [itemData, ...cartData.items]})
    } else {
      const newCartData = cartData.items.filter(item => item.productId !== itemData.productId)
      setCartData({ items: newCartData})
    }
  }

  const handleCheckOut = async () => {
    const {title, price, discount, images} = productData
    const newProductData = {
      title,
      price,
      discount,
      images,
      quantity: 1
    }

    const stripe = await getStripe()

    console.log(newProductData)

    const response = await axios.post(`${BACK_END_URL}/create-checkout-session`, [newProductData])

    if ( response.status === 500 ) return

    const { data } = response

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  
  return (
    <>
    <Navbar/>
    <ProductDetailsStyled>
        <Container className="d-flex flex-column flex-lg-row gap-5 py-5 overflow-hidden">
        {products[0]?.title !== '' && 
        (
        <>
        <Col className="col-12 col-lg-5">
            <div className="main_img p-4"><img className="w-100" src={products[0].images[0].src} alt={products[0]?.title} /></div>
            <div className="sec_img d-flex mt-3 p-2">
                {products[0]?.images?.map((img, ind) => (
                    <Col key={ind} className={`col-3 p-3 img d-flex align-items-center ${imgSelected === img.src ? 'bg-light' : ''}`} onClick={() => setImgSelected(img.src)} ><img className="w-100" src={img.src} alt={'image' + ind} /></Col>
                ))}
                </div>
        </Col>


        {!products[0]?.title ? <Spinner animation="grow" variant="danger" className="m-auto" /> : <Col className="col-12 col-lg-7 text-center text-md-start">
          <h1>{products[0]?.title}</h1>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
          <Rating name="half-rating-read" defaultValue={products[0].rating} precision={products[0].rating / parseInt(products[0].rating) === 1 ? .1 : products[0].rating - parseInt(products[0].rating)} readOnly />
            <span>({products[0]?.rating})</span>
          </div>
          <div className="details my-4">
            <h6 className="fw-bold">Details:</h6>
            <p>{products[0]?.details}</p>
          </div>
          <div className="price">
            <span className="fw-bold fs-5">${(products[0].price - (products[0].price * (products[0].discount/100))).toFixed(2)}</span>
            {products[0].discount !== 0 && <span className="fs-5 ms-2" style={{textDecoration: 'line-through', color: '#ccc'}}>${products[0]?.price}</span>}
            {products[0].discount !== 0 && <span className='discount_box mb-2 ms-2'>%{products[0].discount}</span>}
          </div>
          <div className="d-flex align-items-center gap-3 my-4 justify-content-center justify-content-md-start">
             <h6>Quantity:</h6>
             <div className="quantity d-flex">
                <button onClick={() => setItemData({...itemData, quantity: itemData.quantity - 1})} disabled={itemData.quantity === 1}><RemoveIcon className="text-success"/></button>
                <span>{itemData.quantity}</span>
                <button onClick={() => setItemData({...itemData, quantity: itemData.quantity + 1})} disabled={itemData.quantity === 30}><AddIcon className="text-success"/></button>
             </div>
          </div>
          <div className="mt-5 d-flex gap-4">
            <Button style={{width: '200px', borderRadius: '0',backgroundColor : '#181818',color : '#bda683'}} variant="outlined" color='success' onClick={() => addItem()}>{cartData.items.some(item => item.productId === itemData.productId ) ? 'Remove from cart' : 'Add to cart'}</Button>
            <Button style={{width: '200px', borderRadius: '0',backgroundColor: '#bda683',color : '#181818'}} variant="contained" color="error" onClick={handleCheckOut}>By now</Button>
          </div>
        </Col>}
        </>
        )}
        </Container>
    </ProductDetailsStyled>
    </>
  )
}

export default ProductDetails