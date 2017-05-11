import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateProduct } from './actions/products';
import ProductForm from './ProductForm';

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

        <ProductForm
          product={product}
          onSubmit={
            modified => this.props.updateProduct(Object.assign(modified, {
              id: product.id,
            }))
          }
        />
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
  {
    updateProduct: updateProduct
  },
)(Product);
