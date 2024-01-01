import React from 'react';
import './App.css';
import Card from './Components/Card';
import './Appnew.css';
import Footer from './Components/maincompomnent/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SlidertesT from './Components/Slidertest';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';

import Stockdisplay from './Components/Stockdisplay';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Use Switch instead of Routes
import Contactus from './Components/Contactus';
import StockandWatchlist from './Components/StockandWatchlist';
import SidebarContent from './Components/maincompomnent/SidebarContent';
import News from './Components/News';
import Header from './Header';
import logo from './images/logo.svg';

import Sliders from './Components/Sliders';
import { Container } from 'react-bootstrap';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div>

      <Router>

        <div className='container'>
          <nav><Header /></nav>
          <div className='Sidebar'><SidebarContent /></div>
          <footer><Footer /></footer>
          <Switch>
            <Route path="/home" >
              <div className='content1'><Home /></div>
            </Route>
            <Route path="/Login">
              <div className='content1'><Login /></div>
            </Route>
            <Route path="/Signup">
              <div className='content1'><Signup /></div>
            </Route>

            <Route path="/news" >
              <div className='content1'><News /></div>
            </Route>
            <Route path="/portfolio" >
              <div className='content1'><Portfolio /></div>
            </Route>

            <Route path="/contact" >
              <div className='content1'><Card /></div>
            </Route>
            <Route path="/">
              <div className='content1'><Home /></div>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
