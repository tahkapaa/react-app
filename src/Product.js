import React, { Component } from 'react';

import data from './product-data';

class Product extends Component {
  render() {

    const productId = this.props.match.params.productId;
    const product = data[productId] || {};
    return (
      <div>
        Id: {product.id}<br />
        Title: {product.title}<br />
        Description: {product.description}<br />
        Price: {product.price}<br />
        Currency: {product.currency}<br />
      </div>
    );
  }
}

export default Product;
