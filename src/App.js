import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import MainAlign from './MainAlign';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainAlign>
          <Header />
          <Content />
          <Footer />
        </MainAlign>
      </div>
    );
  }
}

export default App;
