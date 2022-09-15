import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'
import {petterns} from '../../fake/fake';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import {motion} from 'framer-motion'
import { useRef,useState,useEffect } from 'react';

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
            <div className="text-center" style={{color: '#324d67',display :'flex',justifyContent:'space-between'}}>
                <h2 className="fw-bold">Best Pettern Designs</h2>
                {
                    window.location.pathname === '/shop/petterns' ? "" : (
                        <Button variant='outlined' style={{border:'none',backgroundColor : '#bda683'}}><Link to='/shop/petterns' style={{color:'black',textDecoration : 'none'}}>See all</Link></Button>
                    )
                }
            </div>
                <motion.div ref={carousel} className='carousel '>
                        <motion.div
                            drag='x'
                            dragConstraints={{
                                right:0,
                                left: -width
                            }}
                            className='inner-carousel'
                        > 
                        {
                            petterns.map((product) => (
                                <motion.div className='item'>
                                    <Link to={`/product/${product.productId}`} style={{textDecoration : 'none',color : 'black'}}>
                                        <div>
                                            <div className="product-card">
                                                <img 
                                                    src={product.images[0].src}
                                                    width={250}
                                                    height={250}
                                                    className="product-image"
                                                />
                                                <div className='d-flex justify-content-between'>
                                                    <p className="product-price">{product.price}</p>
                                                    <p className="product-price">{product.discount}%</p>
                                                </div>
                                                <p className="product-price">{product.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                                ))
                            }
                    </motion.div>
                </motion.div>
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products