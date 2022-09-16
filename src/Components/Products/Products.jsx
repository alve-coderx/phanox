import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useRef,useState,useEffect } from 'react';
import './style.css'
import { FiStar } from 'react-icons/fi'
import Card from '../Card/Card'
const Products = ({products}) => {
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
                        products?.map((product) => <Card key={product._id} product={product}/>)
                    
                    }
                    </motion.div>
                </motion.div>
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products