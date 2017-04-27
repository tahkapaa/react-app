import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="#" className="logo-link">Logo</a>
        <div className="menu-links">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
        </div>
      </div>
    );
  }
}

export default Header;
