import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'
import {petterns, products} from '../../fake/fake'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './style.css'
import { FiStar } from 'react-icons/fi'
const Products = () => {
    
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
                {
                    products.map((product) => (
                        <Link to={`/products/${product.productId}`} style={{textDecoration : 'none'}}>
                            <div>
                                <div className="product-card">
                                    <img 
                                        src={product.images[0].src}
                                        width={250}
                                        height={250}
                                        className="product-image"
                                    />
                                    <p className="product-name">{product.title}</p>
                                    <p className="product-price">{product.price}</p>
                                </div>
                            </div>
                        </Link>
                        ))
                    }
                </div>
            </div>
            
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products