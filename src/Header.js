import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div>
      <a className="navbar-brand" href="#">StockTracker</a>
      </div>
      <ul className="navbar-nav ms-auto d-flex">
        <li className="nav-but ml-auto">
          <Link className="btn btn-outline-light" style={{ "backgroundColor": "black", "height": "100%", "color": "white" }} to="/Signup">
            Signup
          </Link>
          <Link className="btn btn-outline-light" style={{ "backgroundColor": "black", "height": "100%", "color": "white" }} to="/Login">
            Login
          </Link>
        </li>
      </ul>
    </nav>





  )
}

export default Header