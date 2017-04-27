import React, { Component } from 'react';
import logo from './logo.svg';

import './Header.css';


class Header extends Component {

  componentWillMount() {
    console.log('componentWIllMount!');
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  render() {
    console.log('render!');
    const muuttuja = 'Jotain tekstiä!';

    return (
      <main>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tervetuloa</h2>
          {muuttuja}
        </div>
      </main>
    );
  }
}

export default Header;
