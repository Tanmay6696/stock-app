import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const StockChart = ({ stockData }) => {
  console.log("stockDatas",stockData);
  if(stockData!=undefined && stockData.values !=undefined){
    const labels = stockData.values.map((data) => data.datetime);
    const closingPrices = stockData.values.map((data) => parseFloat(data.close));
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Stock 1',
          data: closingPrices,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
  
    const options = {
      scales: {
        x: [
          {
            type: 'time',
            time: {
              unit: 'minute',
            },
            ticks: {
              maxTicksLimit: 10,
            },
          },
        ],
        y: [
          {
            type: 'linear', // Change "linear" to "linear"
            position: 'left',
            id: 'y-axis-1',
          },
        ],
      },
    };
  
    return <Line data={data} options={options} />;}
  
};

export default StockChart;
