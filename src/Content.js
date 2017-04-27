import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Products from './Products';
import Product from './Product';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-align">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:productId" exact component={Product} />
        </div>
      </div>
    );
  }
}

export default Content;
