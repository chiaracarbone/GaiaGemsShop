import React from 'react';
import {ProductConsumer} from '../../context';
import './Product.css';
import {Link} from "react-router-dom";
import Counter from '../Counter';

export default function Product() {
    return <ProductConsumer>
        {({activeProduct, isInCart, addToCart, removeFromCart, addCountToItem}) => {
            if (!activeProduct) return

            const {id, image, name, price, info, backTo, count} = activeProduct

            return <div className="Product" key={id}>
                <img alt='product img' src={image} />

                <div className="Product-box">
                    <h2>{name}</h2>
                    
                    <div className="Product-price">{price}€</div>

                    <div className="Product-info">{info}</div>

                    <div className="Product-buttons">
                        <Link to={backTo}>
                            <button className="Product-back">⋘ Back</button>                     
                        </Link>

                        {isInCart(id)
                            ? <div className="Product-cart">
                            <div>
                                 <button className="Product-cart-remove" onClick={() => removeFromCart(id)}>
                                Remove from cart
                                </button>
                            </div>
                                <Counter count={count} onChange={(newCount) => {
                                    console.log(count, newCount)
                                    addCountToItem({id, count: newCount})
                                 }} />
                            </div>
                            : <button className="Product-cart-add" onClick={() => addToCart(id)}>
                                Add to Cart
                            </button>
                        }
                    </div>
                </div>     
            </div>
        }}
    </ProductConsumer>
}