import React from 'react'
import "./Counter.css";

function Counter({count = 1, onChange}){
    return (
      <div className="counter-counter">
        <button className='dec' onClick={() => count > 1 && onChange(count - 1)}>-</button>
        <span>{count}</span>
        <button className='inc' onClick={() => onChange(count + 1)}>+</button>
      </div>
    );
};

export default Counter
