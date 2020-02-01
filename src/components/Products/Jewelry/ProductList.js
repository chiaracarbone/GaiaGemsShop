import React, { Component } from 'react';
import Jewelry from './Jewelry';
import {ProductConsumer} from '../../../context';
import './ProductList.css';

export default class ProductList extends Component {

    render() {
         return (
             <React.Fragment>
                 <h3 className="jewelry-heading">Jewelry</h3>
                 <div className='jewelry-class'>
                <ProductConsumer>
            {value => {
                 return value.jewelryList.map( product =>{
                  return <Jewelry key={product.id} product={product} />;
                     })
                 }}
                </ProductConsumer>
                </div>
             </React.Fragment>
         );
    }
}    