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
      dailyPrice: "",
      numberOfSeats: 4,
      numberOfDoors: 4
    },
    imageFile: null,
    responseInfo: {},
    errors: {}
  };
  handleChange = ({ currentTarget: input }) => {
    const vehicle = { ...this.state.vehicle };
    vehicle[input.name] = input.value;
    this.setState({ vehicle });
  };
  handleImageSubmit = e => {
    const image = e.target.files[0];
    const isValidImage = image && image.type.match("image.*");

    if (isValidImage) {
      this.setState({
        imageFile: URL.createObjectURL(image)
      });
    } else {
      this.setState({
        imageFile: null
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length > 0) return;
    console.log("Lego");
  };

  validate = () => {
    return {};
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
        <VehicleForm
          vehicle={this.state.vehicle}
          imageFile={this.state.imageFile}
          onInputChange={this.handleChange}
          onImageInputChange={e => {
            this.handleImageSubmit(e);
          }}
          responseInfo={this.state.responseInfo}
          onSaveClick={e => {
            this.handleSubmit(e);
          }}
        />
      </React.Fragment>
    );
  }
}

export default AddVehicle;
