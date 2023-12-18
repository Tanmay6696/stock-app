// Portfolio.js
import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import Tables from './Tables';

const Portfolio = () => {
  const [investeddata,setinvesteddata]=useState();
  const [presentvaluedata,setpresentvaluedata]=useState();
  const [PandLdata,setPandLdata]=useState();
  
  const datafortehportfolio =(data)=>
  {
    
    console.log("data",data);
    let investeddata=0;
    let presentvaluedata=0;
    let PandLdata=0;
    data.map((datas)=>{
      
      investeddata=investeddata+Number(datas.buyvalue);
      presentvaluedata=datas.presentvalue;

    })
    console.log("investeddata",investeddata);
    investeddata = parseFloat(investeddata);
    investeddata = investeddata.toFixed(2);
    console.log("presentvaluedatass",presentvaluedata);
    presentvaluedata = parseFloat(presentvaluedata);
    presentvaluedata = presentvaluedata.toFixed(2);
    console.log("presentvaluedata",presentvaluedata);
    PandLdata=investeddata-presentvaluedata;
    PandLdata = parseFloat(PandLdata);
    PandLdata = PandLdata.toFixed(2);
    console.log("PandLdata",PandLdata);
    setinvesteddata(investeddata);
    setpresentvaluedata(presentvaluedata);
    setPandLdata(PandLdata);
  }
  return (
    <div className='portfoliocontainer'>
      <span>Holding</span>
      <div className='cards'>
        <div className='row'>
          <div className='col-4'>
            <label className='card-label text-black'>Invested</label>
            <h3 className='card-value text-black'>{investeddata}</h3>
          </div>
          <div className='col-4'>
            <label className='card-label text-black'>Present Value</label>
            <h3 className='card-value text-black '>{presentvaluedata}</h3>
          </div>
          <div className='col-4'>
            <label className='card-label text-black'>Unrealized P&L</label>
            <h3 className='card-value text-black'>{PandLdata}</h3>
          </div>
        </div>
      </div>
      <div className='card1'>
        <div className='row'>
        </div>
      </div>
      <div className='card2'>
        <Tables senddatatoParent={datafortehportfolio} />
      </div>
    </div>
  );
};

export default Portfolio;
