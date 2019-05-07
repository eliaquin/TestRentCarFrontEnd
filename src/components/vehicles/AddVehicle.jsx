import React, { Component } from "react";
import Button from "../common/Button";
import VehicleForm from "./VehicleForm";

class AddVehicle extends Component {
  state = {
    vehicle: {
      brand: "",
      model: "",
      year: "",
      color: "",
      dailyPrice: ""
    }
  };
  handleChange = ({ currentTarget: input }) => {
    const vehicle = { ...this.state.vehicle };
    vehicle[input.name] = input.value;
    this.setState({ vehicle });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row mb-3">
          <div className="col-sm-8">
            <h1>Create New Vehicle</h1>
          </div>
          <div className="col-sm-4 text-right mt-2">
            <Button
              type="primary"
              intendedAction="back"
              text="Back to Vehicles"
              onClick={() => {
                this.props.history.push("/vehicles");
              }}
            />
          </div>
        </div>
        <VehicleForm vehicle={this.state.vehicle} />
      </React.Fragment>
    );
  }
}

export default AddVehicle;
