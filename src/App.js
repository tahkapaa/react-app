import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="main-align">
          <div className="header">
            <a href="#" className="logo-link">Logo</a>
            <div className="menu-links">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
            </div>
          </div>
          <div className="content">
            <div className="content-align">
              <div className="values">
                <div className="value-display">
                  <div className="title">TEMP</div>
                  <div className="value">5 °C</div>
                </div>
                <div className="value-display">
                  <div className="title">WIND</div>
                  <div className="value">6 m/s</div>
                </div>
                <div className="value-display">
                  <div className="title">HUMIDITY</div>
                  <div className="value">70 %</div>
                </div>
                <div className="value-display">
                  <div className="title">ALTITUDE</div>
                  <div className="value">120 m</div>
                </div>
              </div>

              <h1>Lorem ipsum dolor sit amet</h1>
              <p>
                Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
              </p>
            </div>
          </div>
          <div className="footer">
            Copyright © My Company Ltd. 2017
          </div>
        </div>
      </div>
    );
  }
}

export default App;
