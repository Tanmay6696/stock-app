import React from 'react';

import StockandWatchlist from './StockandWatchlist';
import Sliders from './Sliders';
import '../Sliders.css';

const Stockdisplay = () => {
  const companies = [
    { name: "Company1", cmp: "Description1" },
    { name: "Company2", cmp: "Description2" },
    { name: "Company3", cmp: "Description3" },
    { name: "Company4", cmp: "Description4" },
  ];

  return (
    <div className='container'>
      {/* Row for Sliders */}
      <div className='row'>
        
          <Sliders />
        
      </div>

      {/* Row for StockandWatchlist */}
      <div className='row'>
        
          <StockandWatchlist />
        
      </div>
    </div>
  );
};

export default Stockdisplay;
