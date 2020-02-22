import React from 'react';
import {Link} from "react-router-dom";
import './Jewelry.css';
import {ProductConsumer} from '../../../context';


function JewelrysWrapper() {
  return <>
    <h3 className="jewelrys-heading">Jewelry</h3>

    <div className='jewelrys-class'>
      <ProductConsumer>{Jewelrys}</ProductConsumer>
    </div>
  </>
}

function Jewelrys({products, setActiveProduct}) {
  const jewelrys = products.filter(({type}) => type === 'jewelry')

  if (!jewelrys.length) return <h3>No jewelrys!</h3>

  return jewelrys.map(jewelry => <Jewelry
    key={jewelry.id}
    {...jewelry}
    onClick={() => setActiveProduct(jewelry.id, '/Jewelrys')}/>
  )
}

function Jewelry({image, name, price, onClick}) {
  return <div onClick={onClick}>             
    <Link to='/Product'>
    <img alt='necklace' src={image} />
    <footer>{name}<h5>{price}</h5></footer>
    </Link> 
  </div>
}

export default JewelrysWrapper
