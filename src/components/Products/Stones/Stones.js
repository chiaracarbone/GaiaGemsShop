import React from 'react';
import "./Stones.css";
import {Link} from "react-router-dom";
import {ProductConsumer} from '../../../context';



function StonesWrapper() {
  return <>
    <h3 className="stones-heading">Stones</h3>

    <div className='stones-class'>
      <ProductConsumer>{Stones}</ProductConsumer>
    </div>
  </>
}

function Stones({products, setActiveProduct}) {
  const stones = products.filter(({type}) => type === 'stone')

  if (!stones.length) return <h3>No stones!</h3>

  return stones.map(stone => <Stone
    key={stone.id}
    {...stone}
    onClick={() => setActiveProduct(stone.id, '/Stones')}/>
  )
}

function Stone({image, name, price, onClick}) {
  return <div onClick={onClick}>             
    <Link to='/Product'>
    <img alt='necklace' src={image} />
    <footer>{name}<h5>{price}</h5></footer>
    </Link> 
  </div>
}

export default StonesWrapper