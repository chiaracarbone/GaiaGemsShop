import React, { Component } from 'react';
import {ProductConsumer} from '../../../../context';


export default class JewelryProduct extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          return <h1>{value}</h1>
        }}
      </ProductConsumer>
    );
  }
}
