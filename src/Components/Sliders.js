import React, { Component } from 'react';
import '../Sliders.css';
import Card from './Card';
import appleLogo from '../images/apple.svg';

class Sliders extends Component {
    constructor() {
        super();
        console.log("gg");
        this.state = {
            stockdata: [],
            loading: false
        };
    }

    async componentDidMount() {
        try {
            let url = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo';
            let data = await fetch(url);
            let parsedata = await data.json();

            for (let i = 0; i < 6; i++) {
                let datas = await fetch(`https://api.twelvedata.com/logo?symbol=${parsedata.top_gainers[i].ticker}&apikey=2778fddbde3241d2abf472b1526cb99f&source=docs`);
                let logodata = await datas.json();
                parsedata.top_gainers[i].Imageurl = logodata.url;
            }
            console.log("parsedata", parsedata);
            this.setState({ stockdata: parsedata.top_gainers.slice(1, 5), loading: false });
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    }

    render() {
        console.log("stockdata", this.state.stockdata);

        return (
            <>
                <span style={{ color: 'black' }}>Top Gainers</span>
                <div className='outercontainer'>

                    {this.state.stockdata.map((stock, index) => (
                        <div className='card items' key={index}>
                            <div className={`card${index}`} >
                                <img className="card-img-top" src={stock.Imageurl ? stock.Imageurl : ''} style={{ height: '60px' }} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{stock.ticker}</h5>
                                    <span className="card-text" style={{ color: "green" }}>Price: {stock.price}</span><br />
                                    <span className="card-texts">change:  {parseInt(stock.change_percentage)}</span>
                                </div>
                            </div>
                        </div>

                    ))}

                </div></>


        );
    }
}

export default Sliders;
