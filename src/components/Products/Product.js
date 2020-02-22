import React from 'react';
import {ProductConsumer} from '../../context';
import './Product.css';
import {Link} from "react-router-dom";

export default function Product() {
    return <ProductConsumer>
        {({activeProduct, addToCart}) => {
            if (!activeProduct) return

            const {id, image, name, price, info, backTo} = activeProduct

            return <div className="Product" key={id}>
                <img alt='product img' src={image} />

                <div className="Product-box">
                    <h2>{name}</h2>
                    
                    <div className="Product-price">{price}</div>

                    <div className="Product-info">{info}</div>

                    <div className="Product-buttons">
                        <Link to={backTo}>
                            <button className="Product-back">⋘ Back</button>                     
                        </Link>

                        <button className="Product-cart" onClick={() => addToCart(id)}>
                        Add to Cart
                        </button>
                    </div>
                </div>     
            </div>
        }}
    </ProductConsumer>
}