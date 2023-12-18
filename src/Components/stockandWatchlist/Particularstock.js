import React, { useEffect, useState } from 'react'
import appleLogo from '../../images/apple.svg';
import StockChart from './StockChart';
import stockphoto from '../../images/Stockphoto.svg';
import { Alert } from 'bootstrap';
const Particularstock = ({ symboltoParticularstock }) => {
  const [stockDatas, setStockData] = useState(null);
  const [logoData, setLogoData] = useState(null);
  useEffect(() => {
    if (symboltoParticularstock) {
      const fetchData = async () => {
        try {
          console.log("symboltoParticularstock",symboltoParticularstock);
          const url = `https://api.twelvedata.com/time_series?symbol=${symboltoParticularstock.symbol}&interval=15min&apikey=2778fddbde3241d2abf472b1526cb99f`;
          const logourl = `https://api.twelvedata.com/logo?symbol=${symboltoParticularstock.symbol}&apikey=2778fddbde3241d2abf472b1526cb99f`;
          const stockresponse = await fetch(url);
          const stockjson = await stockresponse.json();
          setStockData(stockjson);

          const logoResponse = await fetch(logourl);
          const logojson = await logoResponse.json();
          setLogoData(logojson);
        }
        catch (error) {
          console.error('Error fetching data:', error);
        }

      }
      fetchData();
    }
  }, [symboltoParticularstock]);

  const stockData = {
    "meta": {
      "symbol": "AAPL",
      "interval": "1min",
      "currency": "USD",
      "exchange_timezone": "America/New_York",
      "exchange": "NASDAQ",
      "mic_code": "XNGS",
      "type": "Common Stock"
    },
    "values": [
      {
        "datetime": "2023-11-17 15:59:00",
        "open": "189.85001",
        "high": "189.88000",
        "low": "189.69000",
        "close": "189.71001",
        "volume": "641921"
      },
      {
        "datetime": "2023-11-17 15:58:00",
        "open": "189.86501",
        "high": "189.88000",
        "low": "189.83501",
        "close": "189.85001",
        "volume": "261192"
      },
      {
        "datetime": "2023-11-17 15:57:00",
        "open": "189.81990",
        "high": "189.92000",
        "low": "189.81000",
        "close": "189.86000",
        "volume": "254410"
      },
      {
        "datetime": "2023-11-17 15:56:00",
        "open": "189.64000",
        "high": "189.87000",
        "low": "189.64000",
        "close": "189.82001",
        "volume": "224167"
      },
      {
        "datetime": "2023-11-17 15:55:00",
        "open": "189.63000",
        "high": "189.67000",
        "low": "189.52000",
        "close": "189.64999",
        "volume": "345470"
      },
      {
        "datetime": "2023-11-17 15:54:00",
        "open": "189.74580",
        "high": "189.77991",
        "low": "189.64000",
        "close": "189.66000",
        "volume": "248617"
      },
      {
        "datetime": "2023-11-17 15:53:00",
        "open": "189.82001",
        "high": "189.86000",
        "low": "189.74001",
        "close": "189.74001",
        "volume": "162654"
      },
      {
        "datetime": "2023-11-17 15:52:00",
        "open": "189.78281",
        "high": "189.86000",
        "low": "189.72000",
        "close": "189.84000",
        "volume": "164091"
      },
      {
        "datetime": "2023-11-17 15:51:00",
        "open": "189.70000",
        "high": "189.84000",
        "low": "189.69000",
        "close": "189.78999",
        "volume": "158552"
      },
      {
        "datetime": "2023-11-17 15:50:00",
        "open": "189.71001",
        "high": "189.82001",
        "low": "189.64000",
        "close": "189.70000",
        "volume": "243968"
      },
      {
        "datetime": "2023-11-17 15:49:00",
        "open": "189.83000",
        "high": "189.85001",
        "low": "189.69099",
        "close": "189.69099",
        "volume": "107398"
      },
      {
        "datetime": "2023-11-17 15:48:00",
        "open": "189.80000",
        "high": "189.88000",
        "low": "189.75000",
        "close": "189.84500",
        "volume": "179705"
      },
      {
        "datetime": "2023-11-17 15:47:00",
        "open": "189.78999",
        "high": "189.82001",
        "low": "189.75000",
        "close": "189.80991",
        "volume": "86339"
      },
      {
        "datetime": "2023-11-17 15:46:00",
        "open": "189.77000",
        "high": "189.81500",
        "low": "189.75500",
        "close": "189.80000",
        "volume": "72572"
      },
      {
        "datetime": "2023-11-17 15:45:00",
        "open": "189.71001",
        "high": "189.82001",
        "low": "189.69009",
        "close": "189.78000",
        "volume": "191852"
      },
      {
        "datetime": "2023-11-17 15:44:00",
        "open": "189.78120",
        "high": "189.80000",
        "low": "189.70000",
        "close": "189.70869",
        "volume": "117361"
      },
      {
        "datetime": "2023-11-17 15:43:00",
        "open": "189.77000",
        "high": "189.83000",
        "low": "189.75301",
        "close": "189.78999",
        "volume": "113458"
      },
      {
        "datetime": "2023-11-17 15:42:00",
        "open": "189.82001",
        "high": "189.87000",
        "low": "189.75000",
        "close": "189.78000",
        "volume": "142686"
      },
      {
        "datetime": "2023-11-17 15:41:00",
        "open": "189.85500",
        "high": "189.85500",
        "low": "189.77000",
        "close": "189.82739",
        "volume": "114624"
      },
      {
        "datetime": "2023-11-17 15:40:00",
        "open": "189.92000",
        "high": "189.94000",
        "low": "189.81000",
        "close": "189.86000",
        "volume": "142578"
      },
      {
        "datetime": "2023-11-17 15:39:00",
        "open": "189.93500",
        "high": "189.95000",
        "low": "189.83000",
        "close": "189.91000",
        "volume": "133460"
      },
      {
        "datetime": "2023-11-17 15:38:00",
        "open": "189.87000",
        "high": "189.96001",
        "low": "189.86000",
        "close": "189.94000",
        "volume": "135271"
      },
      {
        "datetime": "2023-11-17 15:37:00",
        "open": "189.81500",
        "high": "189.86501",
        "low": "189.80000",
        "close": "189.86501",
        "volume": "133356"
      },
      {
        "datetime": "2023-11-17 15:36:00",
        "open": "189.89999",
        "high": "189.93500",
        "low": "189.79010",
        "close": "189.81000",
        "volume": "93140"
      },
      {
        "datetime": "2023-11-17 15:35:00",
        "open": "189.74001",
        "high": "189.95000",
        "low": "189.72009",
        "close": "189.91000",
        "volume": "142569"
      },
      {
        "datetime": "2023-11-17 15:34:00",
        "open": "189.69000",
        "high": "189.75000",
        "low": "189.66000",
        "close": "189.74001",
        "volume": "90606"
      },
      {
        "datetime": "2023-11-17 15:33:00",
        "open": "189.69501",
        "high": "189.78000",
        "low": "189.61000",
        "close": "189.69051",
        "volume": "217236"
      },
      {
        "datetime": "2023-11-17 15:32:00",
        "open": "189.84500",
        "high": "189.84500",
        "low": "189.68860",
        "close": "189.68860",
        "volume": "196207"
      }

    ],
    "status": "ok"
  };
  return (
    <div className='card' >

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoData?.url || appleLogo} style={{ width: "37px", height: '38px' ,margin:"10px"}} alt="logophoto" />
        <h5 >{symboltoParticularstock.symbol || 'no'}</h5>   
        <h5 className='PriceText' style={{ marginLeft: 'auto',marginRight:"10px" }}>{"$"+symboltoParticularstock.currentPrice || 'no'}</h5>        
      </div>
      
        {stockDatas ? (<StockChart style={{width:"100%",height:"100%"}} stockData={stockDatas} />) : <p>Loading </p>}
      
    </div>
  )
}

export default Particularstock