import React, { Component } from 'react';
import {jewelryList, detailsJewelry} from './components/Products/Jewelry/JewelryProduct/DetailsOfJewelry';
import {stonesList, detailsStones} from './components/Products/Stones/StonesProduct/DetailsOfStones';


const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        jewelryList: jewelryList,
        detailsJewelry: detailsJewelry,
        stonesList: stonesList,
        detailsStones: detailsStones,
    };


    getItem = (id) => {
        const product = this.state.jewelryList.find(item => item.id === detailsJewelry.id);
        return product;
    };
   

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {[detailsJewelry]:product};
        });
    };

    getItemJew = (id) => {
        const product = this.state.stonesList.find(item => item.id === detailsStones.id);
        return product;
    };
   

    handleDetailJew = id => {
        const product = this.getItemJew(id);
        this.setState(() => {
            return {[detailsStones]:product};
        });
    };

    componentDidMount(){
        console.log(this.state);
    };

    addToCart = id => {
        console.log('hello from addToCart')
    };
  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          handleDetailJew:this.handleDetailJew,
          addToCart:this.addToCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer}