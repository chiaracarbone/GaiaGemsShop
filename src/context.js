import React, { Component } from 'react';
import sum from 'hash-sum'
import {jewelryList} from './components/Products/Jewelry/JewelryProduct/DetailsOfJewelry';
import {stonesList} from './components/Products/Stones/StonesProduct/DetailsOfStones';


const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        activeProduct: null,
        cart: []
    };

    componentDidMount() {
        this.generateProducts();
    }

    generateProducts = () => {
        const addType = (list, type) => list.map(item => ({...item, type}))

        const products = [...addType(jewelryList, 'jewelry'), ...addType(stonesList, 'stone')].map(item => ({
            ...item,
            id: sum(Math.random())
        }))

        this.setState({products})
    }

    setActiveProduct = (id, backTo) => {
        const product = this.state.products.find(item => item.id === id);
        const activeProduct = {...product, backTo}

        this.setState({activeProduct});
    };

    addToCart = id => {
        let tempJewelryList = [...this.state.jewelryList];
        const index = tempJewelryList.indexOf(this.getItem(id));
        const product = tempJewelryList[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() =>{
            return{jewelryList: tempJewelryList, cart:[...this.state.cart]};
        },
             () => {
                console.log(this.state);
             }
        );
    };
  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          setActiveProduct: this.setActiveProduct,
          addToCart: this.addToCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer}