import React from 'react';
import {Image} from "react-bootstrap";

const ProductItem = ({product}) => {
    return (
        <div>
            <Image width={window.outerWidth - 100} src={process.env.REACT_APP_API_URL + product.img} />
        </div>
    );
};

export default ProductItem;