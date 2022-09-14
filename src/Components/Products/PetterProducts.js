import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'
import {petterns} from '../../fake/fake';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';

const Products = () => {
    
  return (
    <>
    <ProductStyled>
        <Container fluid className="my-5 d-flex flex-column align-items-center">
            <div className="text-center" style={{color: '#324d67'}}>
                <h2 className="fw-bold">Best Pettern Designs</h2>
            </div>
            <div className="row pb-5 mb-4">
            {!petterns?.length > 0 ? <div className="pt-4 pb-4 mt-5 d-flex justify-content-center align-items-center"><Spinner animation="grow" variant=" " /></div> : <div className="d-flex justify-content-center flex-wrap mt-5">
                {petterns?.map((product, ind) => {
                    return (
                        <div key={product.productId} className="col-lg-2 col-md-6 mb-4 m-lg-2">
                            <Link to={`/products/${product.productId}`} style={{textDecoration : 'none'}}>
                                    <div className="card rounded shadow-sm border-0">
                                        <div className="card-body p-4"><img src={product.images[0].src} alt="" className="img-fluid d-block mx-auto mb-3"/>
                                        <h5>{product.title}</h5>
                                        <p className="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <div className='d-flex justify-content-between'>
                                            <p className="small font-italic">{product.price}</p>
                                            <p className="small font-italic" style={{background : '#ffc74c',padding:'3px 10px',color : '#181818'}}>{product.discount}% Off</p>
                                        </div>
                                        <ul className="list-inline small">
                                            {[1,2,3,4,5].map((index)=>(
                                                <li key={index} className="list-inline-item m-0"><FiStar/></li>
                                            ))}
                                        </ul>
                                        </div>
                                    </div>
                            </Link>
                        </div>
                    )}
                )}
            </div>}
            </div>
            {
                window.location.pathname === '/shop/petterns' ? "" : (
                    <Button variant='outlined' className='w-50' style={{border:'none',backgroundColor : '#bda683'}}><Link to='/shop/petterns' style={{color:'black',textDecoration : 'none'}}>See all</Link></Button>
                )
            }
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products