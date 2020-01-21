import React, { Component } from 'react';
import Stones from '../Products/Stones/Stones';
import Jewelry from '../Products/Jewelry/Jewelry';

export default class Shop extends Component {
  render() {
    return (
      <div> 
          <Jewelry />
          <Stones/>
      </div>
    );
  }
}
