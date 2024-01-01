import React, { Component, useState, useEffect } from 'react';
import { db, auth, storage } from '../../Firebase';
import { doc, query, docs, getDocs, collection, addDoc, deleteDoc, setDoc, updateDoc, getDoc } from 'firebase/firestore';

import Modalss from './Modalss';
import addimageicon from '../../images/addshareicon.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


import './watchlist.css';
class WatchList extends Component {


  async fetchwatchlistdata() {

    if (this.state.hasMounted != true) {


      const UserID = auth.currentUser ? auth.currentUser.uid : null;
      console.log('UserID  ->' + UserID);
      if (UserID) {

        const docref = doc(db, 'watchlist', UserID);
        const stocksinwatchlist = collection(docref, 'watchlist');
        try {

          const querySnapshot = await getDocs(stocksinwatchlist);

          const newWatchlist = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            share: {
              ...doc.data().share,
              name: doc.data().name,
              symbol: doc.data().symbol,
              logo: doc.data().url,
              currentPrice: doc.data().price,
            },
          }));
          console.log('newWatchlist  ->' + newWatchlist);


          console.log('Component has mounted', newWatchlist);
          if (this.state.hasMounted != true) {
            this.setState(prevState => ({
              hasMounted: true,
              watchlist: [...prevState.watchlist,
              ...newWatchlist
              ]
            }),
              () => {
                // alert('this.state.hasMounted2    ' + this.state.hasMounted);
              });
          }




        }
        catch (error) {
          console.error('Error fetching watchlist data:', error);
        }
      }
      else {

        this.setState({
          watchlist: [{
            share: {
              "symbol": "AAPL",
              "name": "Apple Inc",
              "exchange": "NASDAQ",
              "mic_code": "XNGS",
              "currency": "USD",
              "datetime": "2023-11-17",
              "timestamp": 1700254796,
              "open": "190.25000",
              "high": "190.38000",
              "low": "188.57001",
              "close": "189.69000",
              "volume": "50922700",
              "previous_close": "189.71001",
              "change": "-0.02000",
              "percent_change": "-0.01054",
              "average_volume": "56647050",
              "is_market_open": false,
              "fifty_two_week": {
                "low": "124.17000",
                "high": "198.23000",
                "low_change": "65.52000",
                "high_change": "-8.53999",
                "low_change_percent": "52.76637",
                "high_change_percent": "-4.30812",
                "range": "124.169998 - 198.229996"
              },
              "logo": "https://api.twelvedata.com/logo/apple.com",
              "currentPrice": '120'
            },
          }]
        }
        );
      }
    }
    else {

    }


  }
  componentDidMount() {
    this.fetchwatchlistdata();
    // Code to run when the component mounts


  }

  watchlist = [
    {
      share: {
        "symbol": "AAPL",
        "name": "Apple Inc",
        "exchange": "NASDAQ",
        "mic_code": "XNGS",
        "currency": "USD",
        "datetime": "2023-11-17",
        "timestamp": 1700254796,
        "open": "190.25000",
        "high": "190.38000",
        "low": "188.57001",
        "close": "189.69000",
        "volume": "50922700",
        "previous_close": "189.71001",
        "change": "-0.02000",
        "percent_change": "-0.01054",
        "average_volume": "56647050",
        "is_market_open": false,
        "fifty_two_week": {
          "low": "124.17000",
          "high": "198.23000",
          "low_change": "65.52000",
          "high_change": "-8.53999",
          "low_change_percent": "52.76637",
          "high_change_percent": "-4.30812",
          "range": "124.169998 - 198.229996"
        },
        "logo": "https://api.twelvedata.com/logo/apple.com",
        "currentPrice": '120'
      },
    }]
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      sharename: '',
      isModalOpenforBuystocks: false,
      //.length>0? this.watchlist.share:[],
      sharedetails: '',
      qty: '',
      Sellqty: '',
      watchlist: [],
      sharenameandsymbollist: [],
      hasMounted: false,
      hoverIndex: null,

      loading: false

    };
    console.log("watchlistshareinfo", this.watchlist);

  }

  openModal = () => {
    this.setState({ isModalOpen: true })
  };
  openModals = (sharedetails) => {
    console.log("sharedetailS ", sharedetails);

    this.setState({
      isModalOpenforBuystocks: true,
      sharedetails: sharedetails.share
    })

  };
  openModalS = (sharedetails) => {

    console.log("sharedetails", sharedetails);

    this.setState({
      isModalOpenforSellstocks: true,
      sharedetails: sharedetails
    })

  }
  resetInput = () => {
    this.setState({ sharename: '' });
  };
  Symboldatasent = (element) => {

    console.log("Selected Share Symbol 1st:", element.share);
    this.props.HandliclickopenparticularstocK(element.share);
  }


  // Function to close the modal
  closeModal = () => {
    this.setState({ isModalOpen: false });
    this.resetInput();
  };
  closeModals = () => {
    this.setState({ isModalOpenforBuystocks: false, isModalOpenforSellstocks: false });
    this.resetInput();
  }

  handleInputChange = async (event) => {
    const { value } = event.target;

    try {
      let url = `https://api.twelvedata.com/symbol_search?symbol=${value}&apikey=2778fddbde3241d2abf472b1526cb99f`;
      let data = await fetch(url);
      let parseingdata = await data.json();
      let dataArray = parseingdata;
      if (!Array.isArray(parseingdata)) {
        dataArray=[dataArray];
        this.setState({ sharenameandsymbollist: dataArray });
        console.log("parsingdata", this.state.sharenameandsymbollist);
      } 
      // this.setState({ sharenameandsymbollist: parseingdata });
      // console.log("parsingdata", this.state.sharenameandsymbollist);

    }
    catch (error) {
      console.error("Error:", error);
      // alert("this is not symbol" + error);
    }
    this.setState({ sharename: value }, () => {
      console.log(this.state.sharename);
    });
  };
  handleInputChangeforBuystock = (event) => {
    const { value } = event.target;
    this.setState({ sharename: value }, () => {
      console.log(this.state.sharename);
    });
  };
  handleInputChangebuyQty = (event) => {
    const { value } = event.target;
    console.log("sellvaluesssssss", value, "event.target", event.target, "event.target ", event.target.value);
    console.log("sellvaluesssssss", value);
    this.setState({ qty: value }, () => {
      console.log(this.state.qty);
    });
  }
  handleInputChangeSellQty = (event) => {
    const values = event.target.value;
    console.log("sellvaluesssssss", values, "event.target", event.target, "event.target ", event.target.value);
    this.setState({ Sellqty: values }, () => {
      console.log("sellvaluesssssss", this.state.Sellqty);
    });
  }
  Buyshare = async () => {
    const currentDate = new Date();
    try {

      const UserID = auth.currentUser ? auth.currentUser.uid : null;
      const docref = doc(db, 'stocks', UserID);
      const stocksinwatchlist = collection(docref, 'stocks');
      const stockDocRef = doc(stocksinwatchlist, this.state.sharedetails.symbol);
      const existingData = await getDoc(stockDocRef);

      const docreF = doc(db, 'profitandLoss', UserID);
      const stocksinwatchlisT = collection(docreF, 'profitandLoss');
      const stockDocReF = doc(stocksinwatchlisT, 'profitandLoss');
      const existingDatA = await getDoc(stockDocReF);



      let PandL = existingDatA.data().PandL;
      // setPandL(PandL); 
      let toatalprice = this.state.sharedetails.currentPrice * this.state.qty;
      console.log("this.state.sharedetails.currentprice" + this.state.sharedetails.currentPrice + "this.state.qty " + this.state.qty);
      console.log("toatalprice" + toatalprice + "PandL " + PandL);

      if (existingData.exists() && toatalprice <= PandL) {
        let existingDataqty = existingData.data().qty; // Get the quantity from existingData
        let quantity = this.state.qty; // Get the quantity from the component's state
        console.log("existingDataqty " + existingDataqty + " quantity " + quantity);

        let existingDataprice = isNaN(existingData.data().price) ? 1 : existingData.data().price; // Check if the price is NaN, if true set it to 1, otherwise use the existing price
        let totalqty = Number(existingDataqty) + Number(quantity); // Ensure both values are treated as numbers before addition
        console.log("totalqty " + totalqty);
        toatalprice = PandL - toatalprice;

        let toatlbuyavg = (existingDataqty * existingDataprice + this.state.qty * this.state.sharedetails.currentPrice) / totalqty;

        await setDoc(stockDocRef, {
          date: currentDate.toISOString(), name: this.state.sharedetails.name, price: toatlbuyavg, qty: totalqty, symbol: this.state.sharedetails.symbol
        }, { merge: true });
        await setDoc(stockDocReF, {
          PandL: toatalprice
        });
        alert("Document buy successfully");
        this.closeModals();
        // await gettingProfitandlossdata();

      } else if (toatalprice <= PandL) {
        toatalprice = PandL - toatalprice;
        await setDoc(stockDocRef, {
          date: currentDate.toISOString(), name: this.state.sharedetails.name, price: this.state.sharedetails.currentPrice, qty: this.state.qty, symbol: this.state.sharedetails.symbol
        });
        await setDoc(stockDocReF, {
          PandL: toatalprice
        });
        alert("Document buy successfully");
        this.closeModals();


      }
      else {
        console.log("money is less");
        alert("money is less");
        this.closeModals();
        // await gettingProfitandlossdata();
      }
    }
    catch (err) {
      console.error(err);
    }
  }
  Sellshare = async () => {

    try {
      // Get the current user's ID
      const UserID = auth.currentUser ? auth.currentUser.uid : null;
      const docref = doc(db, 'stocks', UserID);
      const stocksinwatchlist = collection(docref, 'stocks');
      const stockDocRef = doc(stocksinwatchlist, this.state.sharedetails.symbol);
      const existingData = await getDoc(stockDocRef);
      console.log("existingData", existingData);
      alert("HI");
      const docreF = doc(db, 'profitandLoss', UserID);
      const stocksinwatchlisT = collection(docreF, 'profitandLoss');
      const stockDocReF = doc(stocksinwatchlisT, 'profitandLoss');
      const existingDatA = await getDoc(stockDocReF);
      console.log("existingDatA", existingDatA, "stockDocReF", stockDocReF.PandL);

      // Check if the document exists
      if (existingData.exists()) {
        if (existingData.data().qty === this.state.Sellqty) {
          // Log the existing data to the console
          console.log("existingData", existingData);
          alert("hi");
          const sellvalue = (this.Sellqty * this.state.sharedetails.currentPrice);
          alert("hiss");
          await setDoc(existingDatA, {
            PandL: sellvalue
          });
          // Delete the existing document
          await deleteDoc(stockDocRef);

          alert("Document deleted successfully");
        }
        else if (existingData.data().qty > this.state.Sellqty) {
          let sunbtractqty = existingData.data().qty - this.state.Sellqty;

          const PandLdata = existingDatA.data().PandL;
          const sellvalue = PandLdata + (this.state.Sellqty * this.state.sharedetails.currentPrice);
          console.log("existingDatA", existingDatA, "PandLdata", PandLdata, "this.Sellqty", this.state.Sellqty, "this.state.sharedetails.currentPrice", this.state.sharedetails.currentPrice, "sellvalue", sellvalue);
          alert("hiss");
          await setDoc(stockDocReF, {
            PandL: sellvalue
          });
          alert("hiss");
          const postdata = {
            qty: sunbtractqty
          };
          await updateDoc(stockDocRef, postdata);
          alert("hiss2");
          this.closeModals();

          alert("Document deleted successfullyyyy");

        }

      } else {
        alert("Document does not exist");
      }
    } catch (error) {
      // Log any errors that occur during the process
      console.error("Error deleting document:", error);
    }
  };
  DeleteShare = async (sharedetails) => {
    try {
      const UserID = auth.currentUser ? auth.currentUser.uid : null;
      const docref = doc(db, 'watchlist', UserID);
      const stocksinwatchlist = collection(docref, 'watchlist');
      const stockDocRef = doc(stocksinwatchlist, sharedetails.symbol);
      const existingData = await deleteDoc(stockDocRef);
      alert("deleted succesfully");
      window.location.reload();

    } catch (err) {
      alert("not deleted succesfully");
      console.log(err);
    }

  };



  Addshare = async () => {
    let parseingdata = '';
    try {
      let url = `https://api.twelvedata.com/quote?symbol=${this.state.sharename}&apikey=2778fddbde3241d2abf472b1526cb99f`;
      let data = await fetch(url);
      parseingdata = await data.json();
      console.log("parsingdata", parseingdata);
    }
    catch (error) {
      console.error("Error:", error);
      // alert("this is not symbol" + error);
    }



    if (parseingdata) {

      let Symbol = parseingdata.symbol;
      console.log("symbol", Symbol);

      if (Symbol !== undefined) {
        let dataforlogo = await fetch(`https://api.twelvedata.com/logo?symbol=${Symbol}&apikey=2778fddbde3241d2abf472b1526cb99f`);
        let currentpricefromapi = await fetch(`https://api.twelvedata.com/price?symbol=${Symbol}&apikey=2778fddbde3241d2abf472b1526cb99f`);
        let logodatas = await dataforlogo.json();
        let currentpricefromapI = await currentpricefromapi.json();
        console.log("dataforlogo", logodatas.url);
        console.log("currentprice", currentpricefromapI.price);

        const UserID = auth.currentUser ? auth.currentUser.uid : null;
        const docref = doc(db, 'watchlist', UserID);
        const stocksinwatchlist = collection(docref, 'watchlist');

        console.log("docref", docref);
        const stockDocRef = doc(stocksinwatchlist, Symbol);


        await setDoc(stockDocRef, {
          name: parseingdata.name,
          price: currentpricefromapI.price,
          symbol: parseingdata.symbol
        }, { merge: true });
        if (UserID) {
          try {

            var storageRef = storage.ref();

            var userRef = db.collection('users').doc(UserID);
            const storagePath = `users/${UserID}/logosofstocks/${logodatas.url}`;
            const uploadTask = storageRef.child(storagePath).put(logodatas);
          } catch (err) { console.error(err) }


        }
        else {
          alert("some error occurs");
        }



        this.setState(prevState => ({
          watchlist: [...prevState.watchlist, {
            share: {
              ...parseingdata.share,
              name: parseingdata.name,
              symbol: parseingdata.symbol,
              logo: logodatas.url,
              currentPrice: currentpricefromapI.price,
            },
          }],
        }));




      }

    }

    console.log("parseingdata22", parseingdata);

    // console.log("parseingdata.bestMatches[0]", parseingdata.bestMatches[0]);
    this.closeModal();
  }



  render() {

    const { isModalOpen } = this.state;
    const { isModalOpenforBuystocks } = this.state;
    const { isModalOpenforSellstocks } = this.state;

    return (
      <div >


        <div className="card" style={{ width: "100%" }}>

          <div className="filter" style={{ width: "100%" }}>
            <a className="icon" ><img
              src={addimageicon}
              id="addshareicon"
              alt="addshareicon"
              onClick={this.openModal}
              style={{ float: 'right', margin: '10px 10px 0px 0px' }}
            /></a>

          </div>

          <h5 className='card-title' style={{ margin: "10px" }}>WatchList</h5>





          {this.state.watchlist.map((element, index) => (

            <div
              className={`card${this.state.hoverIndex === index ? 'hovered' : ''}`}
              key={index}
              onMouseEnter={() => this.setState({ hoverIndex: index })}
              onMouseLeave={() => this.setState({ hoverIndex: null })}
            >
              <div className="d-flex align-items-center" style={{ margin: "12px" }} >
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center" >
                  <img src={element.share.logo} alt="logo" style={{ height: "45px", width: "45px" }} />
                </div>
                <h5 className='card-title'>{element.share.symbol} <span>|{element.share.name}</span> </h5>
                <div className="ps-3 " style={{ marginLeft: 'auto' }}>
                  <h6 style={{ fontSize: "28px", color: "#012970", fontWeight: 700, margin: 0, padding: 0 }}>{"$" + Math.trunc(element.share.currentPrice)}</h6>


                  <span className="text-success small pt-1 fw-bold">{element.share.percent_change}</span> <span className="text-muted small pt-2 ps-1">{element.share.percent_change ? "increase" : ""}</span>
                  <div className="ps-3 d-flex" style={{ marginLeft: 'auto' }}>
                    <button type="button" className="btn buttoN btn-success me-2" onClick={() => { this.openModals(element) }}>B</button>
                    <button type="button" className="btn buttoN btn-warning me-2" onClick={() => this.Symboldatasent(element)}>C</button>
                    <button type="button" className="btn buttoN btn-warning me-2" onClick={() => { this.openModalS(element.share) }}>S</button>
                    <button type="button" className="btn buttoN btn-warning" onClick={() => { this.DeleteShare(element.share) }}>D</button> <br />

                  </div>


                </div>
              </div>
            </div>


          ))}



        </div>

        {/* Modal structure */}
        <div
          className={`modal fade ${isModalOpen ? 'show' : ''}`}
          id="exampleModal"

          aria-labelledby="exampleModalLabel"
          aria-hidden={!isModalOpen}
          style={{ display: isModalOpen ? 'block' : 'none' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'black' }}>
                  Add Share to Watchlist
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">

                <form>
                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label">Add Share:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      value={this.state.sharename}
                      onChange={this.handleInputChange}
                      list="symbolandsharelist" // Reference to the datalist
                      placeholder='Please enter the symbol or the name'
                    />
                  </div>
                  <datalist id="symbolandsharelist">
                    {this.state.sharenameandsymbollist.slice(0,5).map((result) => (
                      <option key={result.mic_code} value={`${result.symbol} - ${result.instrument_name}`} />
                    ))}
                  </datalist>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={this.Addshare}>ADD Share</button>
                <span>want to find out the symbol <a href="https://stockcharts.com/" target='_blank'>click on this</a></span>

              </div>

            </div>
          </div>
        </div>
        {/* <Modalss sharedetails={this.sharedetails}/> */}
        <div
          className={`modal fade ${isModalOpenforBuystocks ? 'show' : ''}`}
          id="exampleModals"

          aria-labelledby="exampleModalLabel"
          aria-hidden={!isModalOpenforBuystocks}
          style={{ display: isModalOpenforBuystocks ? 'block' : 'none' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: 'black' }}>
                  {this.state.qty ? `Buy ${this.state.sharedetails.name} * ${this.state.qty} qty` : `Buy ${this.state.sharedetails.name} * 1 qty`}
                </h5>
                <a style={{ backgroundColor: 'white', color: 'black' }}>{this.state.sharedetails.currentPrice}</a>
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.closeModals}
                  aria-label="Close"
                  style={{ color: 'black' }}
                ></button>
              </div>
              <div className="modal-body">

                <div className='row'>
                  <div className='col-6' style={{ backgroundColor: 'white', color: 'black' }}>
                    <input type="number" className="form-control" placeholder="Quantity" onChange={this.handleInputChangebuyQty} />
                  </div>
                  <div className='col-6' style={{ backgroundColor: 'white', color: 'black' }}> <input type="number" className="form-control" placeholder="Price" value={this.state.sharedetails.currentPrice} /></div>

                </div>

              </div>
              <div className="modal-footer">

                <a style={{ backgroundColor: 'white', color: 'black' }}>Margin</a>
                <a style={{ backgroundColor: 'white', color: 'black' }}>{this.state.qty ? `${this.state.sharedetails.currentPrice}` * `${this.state.qty}` : ""}</a>
                <button type="button" className="btn btn-success" onClick={this.Buyshare}>
                  buy
                </button>
                <button type="button" className="btn btn-danger" onClick={this.closeModals}>
                  Close
                </button>

              </div>
            </div>
          </div>
        </div>
        <div
          className={`modal fade ${isModalOpenforSellstocks ? 'show' : ''}`}
          id="exampleModals"

          aria-labelledby="exampleModalLabel"
          aria-hidden={!isModalOpenforSellstocks}
          style={{ display: isModalOpenforSellstocks ? 'block' : 'none' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ color: 'black' }}>
                  {this.state.qty ? `Buy ${this.state.sharedetails.name} * ${this.state.qty} qty` : `Buy ${this.state.sharedetails.name} * 1 qty`}
                </h5>
                <a style={{ backgroundColor: 'white', color: 'black' }}>{this.state.sharedetails.currentPrice}</a>
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.closeModals}
                  aria-label="Close"
                  style={{ color: 'black' }}
                ></button>
              </div>
              <div className="modal-body">

                <div className='row'>
                  <div className='col-6' style={{ backgroundColor: 'white', color: 'black' }}>
                    <input type="number" className="form-control" placeholder="Quantity" onChange={this.handleInputChangeSellQty} />
                  </div>
                  <div className='col-6' style={{ backgroundColor: 'white', color: 'black' }}> <input type="number" className="form-control" placeholder="Price" value={this.state.sharedetails.currentPrice} readOnly /></div>

                </div>

              </div>
              <div className="modal-footer">

                <a style={{ backgroundColor: 'white', color: 'black' }}>Margin</a>
                <a style={{ backgroundColor: 'white', color: 'black' }}>{this.state.qty ? `${this.state.sharedetails.currentPrice}` * `${this.state.qty}` : ""}</a>
                <button type="button" className="btn btn-success" onClick={this.Sellshare}>
                  sell
                </button>
                <button type="button" className="btn btn-danger" onClick={this.closeModals}>
                  close
                </button>

              </div>
            </div>
          </div>
        </div>



      </div>
    );
  }
};

export default WatchList;
