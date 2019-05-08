import React, { Component } from "react";
import { loadVehicles } from "../../store/actions";
import { connect } from "react-redux";

class RentVehicle extends Component {
  state = {
    vehicle: {}
  };

  componentDidMount = () => {
    console.log(this.props.vehicles);
  };

  render() {
    return <h1>Rent Vehicle</h1>;
  }
}

const mapStateToProps = state => {
  const { vehicles, clients } = state;
  return { vehicles, clients };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadVehicles: () => dispatch(loadVehicles())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentVehicle);
