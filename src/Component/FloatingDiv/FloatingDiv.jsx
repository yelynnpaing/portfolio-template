import React from 'react';
import './FloatingDiv.css';

const FloatingDiv = ({image}) => {
  return (
    <div className='floatingDiv'>
       <img src={image} alt="" />
    </div>
  )
}

export default FloatingDiv