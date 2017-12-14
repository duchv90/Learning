import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Hoàng Việt Đức</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link" >Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link" >Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
