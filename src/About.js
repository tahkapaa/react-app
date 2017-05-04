import React, { Component } from 'react';

import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          Counter value: {this.props.counter}
        </div>
        <div><button onClick={this.props.increment}>+</button></div>
        <div><button onClick={this.props.decrement}>-</button></div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

// const connectToStore = connect(mapStateToProps);
// const ConnectedAbout = connectToStore(About);
// export default ConnectedAbout;
// ... = ->
export default connect(
  function mapStateToProps(state) {
    return {
      counter: state.counter,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
    };
  },
)(About);

