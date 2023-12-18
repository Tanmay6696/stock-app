import React, { useState } from 'react'
import './Stockandwatchlistcontainer.css';
import Particularstock from './stockandWatchlist/Particularstock';
import WatchList from './stockandWatchlist/WatchList';
const StockandWatchlist = () => {
  const[symboltoParticularstock,SetsymboltoParticularstock]=useState(null);
  function openparticlarstock({name, symbol, logo, currentPrice}) {
    console.log("Selected Share currentprice:", currentPrice);
    SetsymboltoParticularstock({name, symbol, logo, currentPrice});
    
}

  return (
    <div className='stockandwatchlistcontainer'>
      <div className='watchlistarea'>
          <WatchList HandliclickopenparticularstocK={openparticlarstock}/>
      </div>
      <div className='particularstaockarea'>
        {symboltoParticularstock && <Particularstock symboltoParticularstock={symboltoParticularstock}/>}
      </div>     
        
        
    </div>
  )
}
export default StockandWatchlist