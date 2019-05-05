import React, { Component } from "react";
import { connect } from "react-redux";
class Clients extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Clients</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
