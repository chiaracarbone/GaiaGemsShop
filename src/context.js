import React, { useEffect, useState } from 'react';
import sum from 'hash-sum'
import {jewelryList} from './components/Products/Jewelry/JewelryProduct/DetailsOfJewelry';
import {stonesList} from './components/Products/Stones/StonesProduct/DetailsOfStones';


const ProductContext = React.createContext();


function ProductProvider({children}) {
    const [products, setProducts] = useState([])
    const [activeProduct, setActiveProducts] = useState(null)
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        generateProducts()
    }, [])

    function generateProducts() {
        const addType = (list, type) => list.map(item => ({...item, type}))

        const products = [...addType(jewelryList, 'jewelry'), ...addType(stonesList, 'stone')].map(item => ({
            ...item,
            id: sum(Math.random())
        }))

        setProducts(products);
    };

    function setActiveProduct(id, backTo) {
        const product = products.find(item => item.id === id);
        const activeProduct = {...product, backTo}

        setActiveProducts(activeProduct);
    };

    function addCountToItem({id, count}) {
        console.log('press', id, count)
        console.log(cart.map(item => item.count))
        const newCart = cart.map(item => item.id === id
            ? ({...item, count})
            : item
            )
            
        console.log(newCart.map(item => item.count))

        setCart(newCart);

        if (activeProduct.id === id) setActiveProducts({...activeProduct, count})
    };

    function isInCart(id) {
        return cart.some(item => item.id === id)
    }

    function addToCart(id) {
        const product = products.find(product => product.id === id);

        setCart([...cart, product])
    };

    function removeFromCart(id) {
        const removedProduct = cart.filter(product => product.id !== id );

        setCart(removedProduct)
    };

    return (
      <ProductContext.Provider value={{
          products,
          cart,
          activeProduct,
          setActiveProduct,
          isInCart,
          addToCart,
          removeFromCart,
          addCountToItem
      }}>
          {children}
      </ProductContext.Provider>
    );
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer}