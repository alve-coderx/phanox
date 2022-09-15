import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'
import {petterns, products} from '../../fake/fake'
import { Button } from '@mui/material'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useRef,useState,useEffect } from 'react';
import './style.css'
import { FiStar } from 'react-icons/fi'
const Products = () => {
    const [width,setWidth]= useState(0);
    const carousel = useRef()
    
    useEffect(() =>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
  return (
    <>
    <ProductStyled>
        <Container fluid className="py-5 d-flex flex-column" style={{backgroundColor: 'white'}}>
            <div className="text-center " style={{color: '#324d67',display :'flex',justifyContent:'space-between'}}>
                <h2 className="fw-bold">Best Seller Products</h2>
                {
                    window.location.pathname === '/shop/designs' ? "" : (
                        <Button variant='outlined' style={{border:'none',backgroundColor : '#bda683'}}><Link to='/shop/designs' style={{color:'black',textDecoration : 'none'}}>See all</Link></Button>
                    )
                }
            </div>
            <div className='marquee'>
                    <div className='maylike-products-container track'>
                    <motion.div ref={carousel} className='carousel'>
                        <motion.div
                            drag='x'
                            dragConstraints={{right:0,left : -width}}
                            className='inner-carousel'
                        >
                            {
                                products.map((product) => (
                                    <motion.div className='item'>
                                                <div>
                                                    <div className="product-card">
                                                        <img 
                                                            src={product.images[0].src}
                                                            width={250}
                                                            height={250}
                                                            className="product-image"
                                                        />
                                                        <Link to={`/product/${product.productId}`}><p className="product-price">{product.title}</p></Link>
                                                        <p className="product-price">{product.price}</p>
                                                    </div>
                                                </div>
                                    </motion.div>
                                    ))
                                }
                        </motion.div>
                    </motion.div>
                </div>
            </div>     
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products