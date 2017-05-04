import React, { Component } from 'react';
import { connect } from 'react-redux';


class Product extends Component {
  render() {
    const { product } = this.props;
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

export default connect(
  function mapStateToProps(state, ownProps) {
    const data = state.productsData.products;
    const productId = ownProps.match.params.productId;
    const product = data[productId] || {};
    return {
      product,
    };
  },
)(Product);
