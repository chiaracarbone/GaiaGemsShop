import React, { Component } from 'react';
import './About.css';
import Me from "./myself.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <h3 className="about-header">About</h3>
        <div className="about-class"> 
            <h3>Hej!</h3>
            <h5> My name is Chiara. I'm the creator of GaiaGems.
              <p></p>
              Allmost all the Items you can find here are handmade by me with lots of love.
              The Gemstones where bought in Rajasthan,India.
              In the next lines I will tell you a little bit of my story.<br/>
              <p></p>
              Born and raised in Germany I went out to explore the world as soon as I finished school.
              Since then I had great adventures, went to beautiful places,
              learned a lot about different cultures and meet interesting people from all around the globe.
              <p></p>
              One of my passions beside crafting is dancing, especially with a hula-hoop.
              I started making jewelry in 2018 by teaching myself with youtube videos.
              Currently I am learning how to write and work with different programming languages with the
              goal of landing a job as a junior web-devoloper in the future.
            </h5>
            <div className="picture-me">
              <img alt='Me' src={Me}/>
            </div>
        </div>
      </div>

    );
  }
}
