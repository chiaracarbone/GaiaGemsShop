import React, { Component } from 'react';
import image1 from './Pictures/001.jpg';
import image2 from './Pictures/002.jpg';
import image3 from './Pictures/003.jpg';
import image4 from './Pictures/004.jpg';
import image5 from './Pictures/005.jpg';
import image6 from './Pictures/006.jpg';
import image7 from './Pictures/007.jpg';
import image8 from './Pictures/008.jpg';
import {Link} from "react-router-dom";
import './Jewelry.css';


export default class Jewelry extends Component {

  render() {
    return (
      <div>
        <h3 className="jewelry-heading">Jewelry</h3>
        <div className='jewelry-class'>
          
          
             <Link to='/Jewelry/JewelryProduct'>
               <img alt='necklace' src={image1} />
               <footer>Macrame Necklace "Zara"<h5>22€</h5></footer>
             </Link>
          
             <Link to='/Jewelry/JewelryProduct'>
               <img alt='necklace' src={image2}/>
               <footer>Macrame Earrings "Liliane"<h5>15€</h5></footer>
             </Link>
           
             <Link to='/Jewelry/JewelryProduct'>
               <img alt='necklace' src={image3}/>
               <footer>Macrame Necklace "Kali"<h5>25€</h5></footer>
             </Link>
          
             <Link to='/Jewelry/JewelryProduct'>
               <img alt='necklace' src={image4}/>
               <footer>Macrame Earrings "Sita"<h5>12€</h5></footer>
             </Link>
          
             <Link to='/Jewelry/JewelryProduct'>
               <img alt='necklace' src={image5}/>
               <footer>Macrame Necklace "Parvati"<h5>20€</h5></footer>
             </Link>
          
             <Link to='/Jewelry/JewelryProduct'>
               <img alt='necklace' src={image6}/>
               <footer>Macrame Earrings "Freya"<h5>12€</h5></footer>
             </Link>
          
             <Link to='/Jewelry/JewelryProduct'>
               <img alt='necklace' src={image7}/>
               <footer>Macrame Necklace "Sol"<h5>15€</h5></footer>
             </Link>
          
             <Link to='/Jewelry/JewelryProduct'>
               <img alt='necklace' src={image8}/>
              <footer>Macrame Necklace "Durge"<h5>14€</h5></footer>
             </Link>
      </div>
     </div>
    );
  }
}
