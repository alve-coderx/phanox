import React from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import { FiStar } from "react-icons/fi";
import './card.css'
export const Card = ({product}) => {
    return (
        <motion.div className='item'>
            <Link to={`/products/${product._id}`} style={{textDecoration : 'none',color : 'black'}}>
                <div>
                    <div className="product-card">
                        <img 
                            src={product.images[0]}
                            width={250}
                            height={250}
                            className="product-image"
                        />
                        <div className='d-flex justify-content-between'>
                            <p className="product-price">${product.price}</p>
                            <p className="product-price">{product.discount}%</p>
                        </div>
                        <p className="product-price">{product.title}</p>
                        <p className="product-price"><FiStar/><FiStar/><FiStar/><FiStar/><FiStar/></p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}


export default Card;