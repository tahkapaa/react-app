import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { addProduct } from './actions/products';

import ProductForm from './ProductForm';


class Products extends Component {
  render() {
    const links = [];
    const keys = Object.keys(this.props.data);
    keys.forEach((id) => {
      links.push(
        <Link to={`/products/${id}`} key={id}>
          {this.props.data[id].title}
        </Link>,
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
    };
  },
)(Products);
