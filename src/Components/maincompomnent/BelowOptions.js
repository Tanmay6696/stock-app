import React from 'react'
import applelogo from '../../images/apple.svg';
const BelowOptions = (props) => {
  return (    
    <div className='frame15'>
      <img src={props.img}/>
      <span>{props.text}</span>
    </div>    
  )
}

export default BelowOptions