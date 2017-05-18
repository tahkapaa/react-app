import React, { Component } from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  render() {
    const { isLoading, errorMessage } = this.props;
    return (
      <div className="header">
        <NavLink to="/" className="logo-link">Logo</NavLink>
        <div className="menu-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <div>
            {isLoading && <span>Loading!</span>}
            {errorMessage && <span>{errorMessage}</span>}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    const { isLoading, errorMessage } = state.productsData;
    return {
      isLoading,
      errorMessage,
    };
  },
)(Header);
