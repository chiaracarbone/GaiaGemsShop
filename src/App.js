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
import Jewelrys from './components/Products/Jewelry/Jewelrys';
import Product from './components/Products/Product'
import Stones from './components/Products/Stones/Stones';
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
          <Route path='/Jewelrys' exact component={Jewelrys} />
          <Route path='/Stones' exact component={Stones}/>
          <Route path='/Cart' exact component={Cart} />
          <Route path='/Product' exact component={Product} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    )
  }
}


export default App;
