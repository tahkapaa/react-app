import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/" className="logo-link">Logo</NavLink>
        <div className="menu-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
