import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import {motion} from 'framer-motion'
import { useRef,useState,useEffect } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/admin/adminSlice';

const Products = () => {
    const {data} = useSelector(state => state.products.data)
    const [width,setWidth]= useState(0);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

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
                            data?.map((product) => <Card key={product._id} product={product}/>)
                        }
                    </motion.div>
                </motion.div>
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products