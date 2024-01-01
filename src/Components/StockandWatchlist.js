import React, { useState } from 'react'
import './Stockandwatchlistcontainer.css';
import appleLogo from '../images/apple.svg';
import Particularstock from './stockandWatchlist/Particularstock';
import WatchList from './stockandWatchlist/WatchList';
const StockandWatchlist = () => {
  const [symboltoParticularstock, setSymboltoParticularstock] = useState(null);
  function openparticlarstock({name, symbol, logo, currentPrice}) {
    console.log("Selected Share currentprice:", currentPrice);
    setSymboltoParticularstock({name, symbol, logo, currentPrice});
    
}

  return (
    <div className='stockandwatchlistcontainer'>
      <div className='watchlistarea'>
          <WatchList HandliclickopenparticularstocK={openparticlarstock}/>
      </div>
      <div className='particularstaockarea'>
      {symboltoParticularstock ? <Particularstock symboltoParticularstock={symboltoParticularstock} /> : <Particularstock symboltoParticularstock="" />}

      </div>     
        
        
    </div>
  )
}
export default StockandWatchlist