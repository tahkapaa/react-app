import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Button label='Nappi 1:'/>
        <Button counter={10}/>
        <Button counter={100}/>
        <Button counter={1000}/>
      </div>
    );
  }
}

export default App;
