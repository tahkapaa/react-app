import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import {
  addProduct,
  deleteProduct,
} from './actions/products';

import ProductForm from './ProductForm';


class Products extends Component {
  render() {
    const data = this.props.data;
    const links = [];
    const keys = Object.keys(this.props.data);
    keys.forEach((id) => {
      links.push(
        <div key={id}>
          <Link to={`/products/${id}`}>
            {this.props.data[id].title}
          </Link>
          <button onClick={() => this.props.deleteProduct(data[id])}>
            Delete
          </button>
        </div>,
      );
    });

    return (
      <div>
        Products:
        <ProductForm
          onSubmit={this.props.addProduct}
        />
        {links}
      </div>
    );
  }
}

export default connect(
  function mapStateToProps(state) {
    return {
      data: state.productsData.products,
    };
  },
  (dispatch) => {
    return {
      addProduct: productState => dispatch(addProduct(productState)),
      deleteProduct: product => dispatch(deleteProduct(product)),
    };
  },
)(Products);
