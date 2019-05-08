import React, { Component } from "react";
import VehiclesTable from "./VehiclesTable";
import Button from "../common/Button";
import { loadVehicles } from "../../store/actions";
import { connect } from "react-redux";

class Vehicles extends Component {
  componentDidMount() {
    this.props.onLoadVehicles();
  }

  render() {
    return (
      <React.Fragment>
        <div className="row mb-3">
          <div className="col-sm-8">
            <h1>Vehicles</h1>
          </div>
          <div className="col-sm-4 text-right mt-2">
            <Button
              type="primary"
              intendedAction="add"
              text="Create New Vehicle"
              onClick={() => {
                this.props.history.push("/vehicles/add");
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <VehiclesTable vehicles={this.props.vehicles} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { vehicles } = state;
  return { vehicles };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadVehicles: () => dispatch(loadVehicles())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vehicles);
