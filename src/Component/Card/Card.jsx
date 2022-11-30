import React from 'react';
import './Card.css';


const Card = ({image, txt, detail}) => {
  return (
    <div>
        <div className='card'>
            <img src={image} alt="" className='c-image' />
            <span>{txt}</span>
            <span>{detail}</span>
            <button className='btn c-btn'>View More</button>
        </div>
    </div>
    
  )
}

export default Card