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
    const [productDataaaa, setProductData] = useState(data)
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

    const productData =
      {
        productId: 5,
        images: [
          {
            src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269097cb91d8ca3188289a4a66b2fb915f2f82_thumbnail_600x.webp",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269100f2af8499b5c5d074b08f0a4fa8884703_thumbnail_600x.webp",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/1627269104e035e6af94ebe45fd28d208a8fe38d10_thumbnail_600x.webp",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://img.ltwebstatic.com/images3_pi/2021/07/26/162726910228fdbfef7994fd35f2be784dec8e9b12_thumbnail_600x.webp",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        discount : '50',
        price: '$35',
        title: 'Basic Tee',
        href: '#',
        imageAlt: "Front of men's Basic Tee in black.",
        color: 'Black',
      }
  return (
    <>
    <Navbar/>
    <ProductDetailsStyled>
        <Container className="d-flex flex-column flex-lg-row gap-5 py-5 overflow-hidden">
        {productData?.title !== '' && 
        (
        <>
        <Col className="col-12 col-lg-5">
            <div className="main_img p-4"><img className="w-100" src={productData.images[0].src} alt={productData?.title} /></div>
            <div className="sec_img d-flex mt-3 p-2">
                {productData?.images?.map((img, ind) => (
                    <Col key={ind} className={`col-3 p-3 img d-flex align-items-center ${imgSelected === img.src ? 'bg-light' : ''}`} onClick={() => setImgSelected(img.src)} ><img className="w-100" src={img.src} alt={'image' + ind} /></Col>
                ))}
                </div>
        </Col>


        {!productData?.title ? <Spinner animation="grow" variant="danger" className="m-auto" /> : <Col className="col-12 col-lg-7 text-center text-md-start">
          <h1>{productData?.title}</h1>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
          <Rating name="half-rating-read" defaultValue={productData.rating} precision={productData.rating / parseInt(productData.rating) === 1 ? .1 : productData.rating - parseInt(productData.rating)} readOnly />
            <span>({productData?.rating})</span>
          </div>
          <div className="details my-4">
            <h6 className="fw-bold">Details:</h6>
            <p>{productData?.details}</p>
          </div>
          <div className="price">
            <span className="fw-bold fs-5">${(productData.price - (productData.price * (productData.discount/100))).toFixed(2)}</span>
            {productData.discount !== 0 && <span className="fs-5 ms-2" style={{textDecoration: 'line-through', color: '#ccc'}}>${productData?.price}</span>}
            {productData.discount !== 0 && <span className='discount_box mb-2 ms-2'>%{productData.discount}</span>}
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
            <Button style={{width: '200px', borderRadius: '0',}} variant="outlined" color='success' onClick={() => addItem()}>{cartData.items.some(item => item.productId === itemData.productId ) ? 'Remove from cart' : 'Add to cart'}</Button>
            <Button style={{width: '200px', borderRadius: '0',backgroundColor: '#10b981'}} variant="contained" color="error" onClick={handleCheckOut}>By now</Button>
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