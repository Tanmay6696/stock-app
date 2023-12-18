import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">StockTracker</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">

          <li className="nav-but">
            <Link className="btn btn-outline-light"  style={{"backgroundColor":" black", "height":"100%"}} to="/Signup">Signup</Link>
          </li>
          <li className="nav-but">
            <Link className="btn btn-outline-light" style={{"backgroundColor":" black", "height":"100%"}} to="/Login">Login</Link>
          </li>
        </ul>
      </div> */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-but"><Link className="btn btn-outline-light" style={{ "backgroundColor": "black", "height": "100%" }} to="/Signup">Signup</Link> <Link className="btn btn-outline-light" style={{ "backgroundColor": "black", "height": "100%" }} to="/Login">Login</Link></li>
      </ul>

    </nav>



  )
}

export default Header