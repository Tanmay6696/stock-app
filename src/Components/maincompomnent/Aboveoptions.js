import React from 'react';
import '../../App.css';
import Home from '../../images/Home.svg';
const Aboveoptions = (props) => {
  return (
    <div >
        <div className='home'>
            <img src={props.img} alt="Home Icon"/>
            <span className='hometext'>{props.text}</span>
        </div>
    </div>
  )
}

export default Aboveoptions