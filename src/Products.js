import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import data from './product-data';

class Products extends Component {
  render() {
    const links = [];
    const keys = Object.keys(data);
    keys.forEach((id) => {
      links.push(
        <Link to={`/products/${id}`} key={id}>
          {data[id].title}
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

export default Products;
