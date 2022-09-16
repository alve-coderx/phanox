import React from "react";
import { Col } from "react-bootstrap";

export const ProductImage = ({productData}) => {
    return (
        <Col className="col-12 col-lg-5">
            {/* <div className="main_img p-4"><img className="w-100" src={productData?.images[0]}/></div> */}
        </Col>
    )
}


export default ProductImage;