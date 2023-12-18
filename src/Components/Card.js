import React from 'react'
import './Card.css';
import applelogo from '../images/apple.svg'
const Card = () => {
  return (
    <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Orders Received</h6>
                    <h2 className="text-right"><img src={applelogo}/><span>486</span></h2>
                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
  )
}

export default Card