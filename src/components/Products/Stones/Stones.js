import React, { Component } from 'react';
import "./Stones.css";
import image1 from "./Pictures/stones001.jpg";
import image2 from "./Pictures/stones002.jpg";
import image3 from "./Pictures/stones003.jpg";
import image4 from "./Pictures/stones004.jpg";
import image5 from "./Pictures/stones005.jpg";
import image6 from "./Pictures/stones006.jpg";


export default class Stones extends Component {


  render() {

    return (
      <div>
        <h3 className="heading-stones">Stones</h3>
        <div className="stones-class"> 
          <div><img alt='stones' src={image1}/>Labradorite<h5>5€/piece</h5></div>
          <div><img alt='stones' src={image2}/>Chryscolla<h5>2.50€/piece</h5></div>
          <div><img alt='stones' src={image3}/>Turquoise<h5>3€/piece</h5></div>
          <div><img alt='stones' src={image4}/>Amethyst<h5>4€/piece</h5></div>
          <div><img alt='stones' src={image5}/>Malachite<h5>2.50€/piece</h5></div>
          <div><img alt='stones' src={image6}/>Humatite<h5>3€/piece</h5></div>
        </div>
      </div>
    );
  }
}
