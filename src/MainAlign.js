import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainAlign extends Component {
  render() {
    return (
      <div className="main-align">
        {this.props.children}
      </div>
    );
  }
}

MainAlign.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainAlign;
