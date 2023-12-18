  // Tables.js
  import { db, auth } from '../Firebase';
  import { doc, query, docs, getDocs, collection, addDoc, deleteDoc, setDoc, updateDoc, getDoc } from 'firebase/firestore'
  import React, { useState } from 'react';
  import DataTable from 'react-data-table-component';
  import { useEffect } from 'react';
  const columns = [
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Qty',
      selector: (row) => row.Qty,
      sortable: true,
    },
    {
      name: 'BUYavg',
      selector: (row) => row.BUYavg,
      sortable: true,
    },
    {
      name: 'buyvalue',
      selector: (row) => row.buyvalue,
      sortable: true,
    },
    {
      name: 'LTP',
      selector: (row) => row.LTP,
      sortable: true,
    }, {
      name: 'presentvalue',
      selector: (row) => row.presentvalue,
      sortable: true,
    }, {
      name: 'pandl',
      selector: (row) => row.pandl, // Update this to 'P&L'
      sortable: true,
    }, {
      name: 'pandlchange',
      selector: (row) => row.pandlchange, // Update this to 'P&Lchange'
      sortable: true,
    },
  ];

  const Data = [
    {
      id: 1,
      Qty: '5',
      BUYavg: '1988',
      LTP: '2000'
    },

  ];


  const calculatePresentValue = (row,LTP) => {
  
    let qty = parseInt(row.qty);
    let ltp = parseFloat(LTP).toFixed(2); // Use parseFloat for decimal values

    return qty * ltp;
  };

  const calculatePandL = (row,LTP) => {
    
    let presentValue = calculatePresentValue(row,LTP);
    let buyValue = calculateBuyValue(row,LTP);

    return presentValue - buyValue;
  };

  const calculatePandLChange = (row,LTP) => {
  
    let presentValue = calculatePresentValue(row,LTP);
    let buyValue = calculateBuyValue(row,LTP);
    presentValue=parseFloat(presentValue).toFixed(2);
    buyValue=parseFloat(buyValue).toFixed(2);
    return isNaN(presentValue) || isNaN(buyValue) ? 0 : ((presentValue - buyValue) / buyValue) * 100;
  };

  const calculateBuyValue = (row,LTP) => {
  
    let qty = (row.qty);
    let buyAvg = parseFloat(row.price).toFixed(2);

    return isNaN(qty) || isNaN(buyAvg) ? 0 : qty * buyAvg;
  };
  const Ltpprice = async (row) => {
    try {
      let url = `https://api.twelvedata.com/price?symbol=${row.symbol}&apikey=2778fddbde3241d2abf472b1526cb99f`;
      const data = await fetch(url);
      const stockjson = await data.json();

      const ltppric = stockjson.price;
      return ltppric;
    } catch (err) {
      console.error(err);

    }

  }




  function Tables({senddatatoParent}) {
    const [Data, setData] = useState([]);
    const UserID = auth.currentUser ? auth.currentUser.uid : null;
   
    const datafetching = async () => {

      const UserID = auth.currentUser ? auth.currentUser.uid : null;
      if (UserID) {
        try {
          const docref = doc(db, 'stocks', UserID);
          const stocksinwatchlist = collection(docref, 'stocks');
          const existingData = await getDocs(stocksinwatchlist);
          const newdataarray = existingData.docs.map(async (doc) => {
            const data = doc.data();
            console.log("Document data:", data);
            const LTP = await Ltpprice(data);
            const updatedDatas = {

              ...data,
              title: data.name,
              Qty: data.qty,
              BUYavg: parseFloat(data.price).toFixed(2),
              LTP: parseFloat(LTP).toFixed(2) ,
              presentvalue:parseFloat(calculatePresentValue(data,LTP)).toFixed(2) ,
              pandl: parseFloat(calculatePandL(data,LTP)).toFixed(2),
              pandlchange: parseFloat(calculatePandLChange(data,LTP)).toFixed(2),
              buyvalue:parseFloat(calculateBuyValue(data,LTP)).toFixed(2) ,
            };
            return updatedDatas;
          });
          const alldataafterthepromise=await Promise.all(newdataarray);
          console.log("alldataafterthepromise",alldataafterthepromise);
          setData(alldataafterthepromise);
          console.log("Data", Data);
          senddatatoParent(alldataafterthepromise);
        }
        catch (err) {
          console.error(err);
        }
      }


    }
    useEffect(() => {
      datafetching();
    }, [])



    return <>{UserID?(<DataTable  columns={columns} data={Data}  selectableRows />):("you are not login")} </>;
  }

  export default Tables;


