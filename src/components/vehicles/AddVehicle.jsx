import React, { Component } from "react";
import Button from "../common/Button";
import VehicleForm from "./VehicleForm";
import axios from "axios";
import { saveVehicleUrl } from "../../utils/urls";

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
    axios
      .post(saveVehicleUrl, this.state.vehicle)
      .then(result => {
        const responseInfo = result.data;
        if (responseInfo.operationSuccessful) {
          console.log(responseInfo);
        }
      })
      .catch(error => {
        this.setState({
          responseInfo: {
            operationSuccessful: false,
            message: "Error occurred. Operation failed."
          }
        });
      });
  };

  validate = () => {
    const errors = {};
    const { vehicle } = this.state;
    const yearOfFirstCommerciallyAvailableVehicle = 1908;
    const currentYear = 1900 + new Date().getYear();

    //If a field has more than one error only one error will be recorded at a time.
    if (vehicle.brand.trim() === "") errors.brand = "Brand is required";
    if (vehicle.model.trim() === "") errors.model = "Model is required";
    if (vehicle.year.trim() === "") errors.year = "Year is required";
    if (vehicle.color.trim() === "") errors.color = "Color is required";
    if (vehicle.brand.trim() === "") errors.brand = "Brand is required";

    if (vehicle.dailyPrice.trim() === "")
      errors.dailyPrice = "Daily price is required";
    if (isNaN(vehicle.year)) {
      errors.year = "Valid year is required";
    } else {
      //If it's a number has to be a valid number
      if (
        Number(vehicle.year) < yearOfFirstCommerciallyAvailableVehicle ||
        Number(vehicle.year) > currentYear + 2
      ) {
        errors.year = `Must supply a year between ${yearOfFirstCommerciallyAvailableVehicle} and ${currentYear +
          2}`;
      }
    }
    if (vehicle.year.trim() === "") errors.year = "Year is required";

    if (isNaN(vehicle.dailyPrice)) {
      errors.dailyPrice = "You must supply a valid price";
    } else {
      if (Number(vehicle.dailyPrice < 0)) {
        errors.dailyPrice = "Price must be a positive number";
      }
    }
    if (this.state.imageFile === null) {
      errors.imageFile = "You must add an image";
    }
    if (isNaN(vehicle.numberOfDoors)) {
      errors.numberOfDoors = "Must provide a valid number";
    } else {
      if (
        Number(vehicle.numberOfDoors) < 1 ||
        Number(vehicle.numberOfDoors) > 7
      )
        errors.numberOfDoors = "Please provide a valid value";
    }
    if (isNaN(vehicle.numberOfSeats)) {
      errors.numberOfSeats = "Must provide a valid number";
    } else {
      if (
        Number(vehicle.numberOfSeats) < 2 ||
        Number(vehicle.numberOfSeats) > 200
      )
        errors.numberOfSeats = "Please provide a valid value";
    }
    return errors;
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
          errors={this.state.errors}
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
