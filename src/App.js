import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Default from './components/Default';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Socialmedia from './components/Socialmedia/Socialmedia';
//import Jewelry from './components/Products/Jewelry/Jewelry';
//import Stones from './components/Products/Stones/Stones';
import JewelryProduct from './components/Products/Jewelry/JewelryProduct/JewelryProduct'
import ProductList from './components/Products/Jewelry/ProductList';
import StonesProduct from './components/Products/Stones/StonesProduct/StonesProduct'
import ProductListStones from './components/Products/Stones/ProductListStones';
class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Socialmedia></Socialmedia>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Shop} />
          <Route path='/About' exact component={About} />
          <Route path='/Shop' exact component={Shop} />
          <Route path='/Jewelry' exact component={ProductList} />
          <Route path='/Stones' exact component={ProductListStones}/>
          <Route path='/Cart' exact component={Cart} />
          <Route path='/JewelryProduct' component={JewelryProduct} />
          <Route path='/StonesProduct' component={StonesProduct} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    )
  }
}


export default App;
