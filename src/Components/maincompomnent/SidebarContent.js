// SidebarContent.js

import React, { useEffect, useState } from 'react';
import { db, auth } from '../../Firebase';
import { doc, collection, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Home from '../../images/Home.svg';
import News from '../../images/News.svg';
import wallet from '../../images/wallet.svg';
import Aboveoptions from './Aboveoptions';
import BelowOptions from './BelowOptions';
import settingicon from '../../images/settingicon.svg';
import phoneicon from '../../images/Phone.svg';
import './Sidebar.css';
 

const SidebarContent = () => {
  const [PandL, setPandL] = useState(null);
  const [loading, setLoading] = useState(true);
  const[selectedtitem,setselectedtitem]=useState(null);
  const handliclick=(item)=>{
   
    setselectedtitem(item)
  }
  const gettingProfitandlossdata = async (setPandL,setLoading) => {
    try {
      const UserID = auth.currentUser ? auth.currentUser.uid : null;
      if(UserID){
        const docref = doc(db, 'profitandLoss', UserID);
      const stocksinwatchlist = collection(docref, 'profitandLoss');
      const stockDocRef = doc(stocksinwatchlist, 'profitandLoss');
      const existingData = await getDoc(stockDocRef);
      let PandL = existingData.data().PandL;
      alert(PandL);
      setPandL(PandL);
      }
      
    } catch (error) {
      console.error("Error in gettingProfitandlossdata:", error);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    gettingProfitandlossdata(setPandL, setLoading);
  }, []); // Empty dependency array to run the effect only once on mount
  const items=['Home','News','portfolio'];
  return (
    
    <div className='sidebar'>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <span style={{"color":"Black"}}>{PandL}</span>
          <br />
          {items.map((item,index)=>(
            <Link 
              key={index}
              className={selectedtitem === item ?'selected':''} 
              to={`/${item}`} 
              onClick={()=>{handliclick(item)}}
            >
            <span>{item}</span>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default SidebarContent;
