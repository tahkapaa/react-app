import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super();

    let product = props.product || {};

    this.state = {
      title: product.title || '',
      description: product.description || '',
      price: product.price || '',
      currency: product.currency || '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event, property) {
    this.setState({
      [property]: event.target.value,
    });
  }

  render() {
    const {
      title,
      description,
      price,
      currency,
    } = this.state;

    return (
      <div>
        <input
          onChange={event => this.onChange(event, 'title')}
          value={title}
          placeholder="Title"
          type="text"
        />
        <br />
        <input
          onChange={event => this.onChange(event, 'description')}
          value={description}
          placeholder="Description"
          type="text"
        />
        <br />
        <input
          onChange={event => this.onChange(event, 'price')}
          value={price}
          placeholder="Price"
          type="text"
        />
        <br />
        <input
          onChange={event => this.onChange(event, 'currency')}
          value={currency}
          placeholder="Currency"
          type="text"
        />
        <br />

        <button
          onClick={() => this.props.onSubmit(Object.assign({}, this.state))}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default ProductForm;
