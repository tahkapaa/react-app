import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

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
)(Products);
