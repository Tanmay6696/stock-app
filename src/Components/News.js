import React, { useEffect, useState } from 'react'
import './News.css';


const News = () => {
  const [newsdata, Setnewsdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {

        const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=technology&apikey=C9X0FMOGO5INLTIZ`);
        const data = await response.json();
        Setnewsdata(data);
        console.log("NewsData0000", data);
        console.log("title", data.feed[0].title);
        console.log("title", data.feed[0]);



      }
      catch (error) {
        console.log("error" + error);
      }
    }
    fetchdata();
  }, []);
  return (
    <div className='newscontainer'>

      {newsdata && newsdata.feed ? (
        newsdata.feed.map((item, index) => (
          item && item.banner_image && item.title ? (
            <div className="cards" key={index}>
              <div className="card" style={{ width: "18rem", height: "100%" }}>
                <img src={item.banner_image} className="card-img-top" alt={item.banner_image} />
                <div className="card-body">
                  <h5 className="card-title">{item.title.slice(0, 120)}</h5>
                  <p className="card-text">{item.summary ? item.summary.slice(0, 51) : ''}</p>
                  <button type="button" className="btn btn-primary" target="_blank" href={item.url}><a className='anchortaginnewscard' href={item.url} target="_blank">Explore</a></button>

                </div>
              </div>
            </div>
          ) : ''
        ))
      ) : <p>'hi hi'</p>}

    </div>)
}

export default News