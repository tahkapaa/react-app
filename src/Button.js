import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Button extends Component {
    
    constructor(props) {
        super();

        this.state = {
            counter: props.counter || 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Nappia painettu.');
        this.setState({
            counter: this.state.counter + 1
        });
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.label} {this.state.counter}
            </button>
        );
    }
}


Button.defaultProps = {
  label: 'Default',
  counter: 2
}
Button.propTypes = {
    counter: PropTypes.number,
    label: PropTypes.string
}

export default Button;