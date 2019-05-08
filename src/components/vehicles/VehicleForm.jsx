import React from "react";
import _ from "lodash";
import Button from "../common/Button";
import AlertMessage from "../common/AlertMessage";
import ErrorDisplay from "../common/ErrorDisplay";

const VehicleForm = props => {
  const listOfColors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Yellow" },
    { id: 4, name: "Green" },
    { id: 5, name: "Blue" },
    { id: 6, name: "Purple" },
    { id: 7, name: "Pink" },
    { id: 8, name: "Brown" },
    { id: 9, name: "Gray" },
    { id: 10, name: "Black" },
    { id: 11, name: "White" }
  ];
  const listOfColorsOrdered = _.orderBy(listOfColors, ["name"], ["asc"]);

  const renderColors = () => {
    return [
      <option key="0" value="default" disabled="disabled">
        Choose Color
      </option>,
      ...listOfColorsOrdered.map(el => (
        <option key={el.id} value={el.name}>
          {el.name}
        </option>
      ))
    ];
  };
  return (
    <React.Fragment>
      <form className="mb-3">
        <div className="row">
          <div className="col-sm-5 mb-3">
            <label htmlFor="">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="form-control"
              value={props.vehicle.brand}
              onChange={props.onInputChange}
            />
            <ErrorDisplay error={props.errors["brand"]} />
          </div>
          <div className="col-sm-5 mb-3">
            <label htmlFor="">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              className="form-control"
              value={props.vehicle.model}
              onChange={props.onInputChange}
            />
            <ErrorDisplay error={props.errors["model"]} />
          </div>
          <div className="col-sm-2 mb-3">
            <label htmlFor="">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              className="form-control"
              value={props.vehicle.year}
              onChange={props.onInputChange}
            />
            <ErrorDisplay error={props.errors["year"]} />
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="">Color</label>
            <select
              name="color"
              id="color"
              className="form-control"
              onChange={props.onInputChange}
              defaultValue="default"
            >
              {renderColors()}
            </select>
            <ErrorDisplay error={props.errors["color"]} />
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="">Daily Price</label>
            <input
              type="number"
              id="dailyPrice"
              name="dailyPrice"
              className="form-control"
              value={props.vehicle.dailyPrice}
              onChange={props.onInputChange}
            />
            <ErrorDisplay error={props.errors["dailyPrice"]} />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="fileImage">Photo</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              className="form-control"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={props.onImageInputChange}
            />
            <ErrorDisplay error={props.errors["imageFile"]} />
          </div>
          <div className="col-sm-2 mb-3">
            <label htmlFor="">Number of Seats</label>
            <input
              type="number"
              id="numberOfSeats"
              name="numberOfSeats"
              min="2"
              max="200"
              className="form-control"
              value={props.vehicle.numberOfSeats}
              onChange={props.onInputChange}
            />
            <ErrorDisplay error={props.errors["numberOfSeats"]} />
          </div>
          <div className="col-sm-2 mb-3">
            <label htmlFor="">Number of Doors</label>
            <input
              type="number"
              id="numberOfDoors"
              name="numberOfDoors"
              className="form-control"
              min="1"
              max="7"
              value={props.vehicle.numberOfDoors}
              onChange={props.onInputChange}
            />
            <ErrorDisplay error={props.errors["numberOfDoors"]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-right">
            <Button
              type="success"
              intendedAction="save"
              text="Save"
              onClick={props.onSaveClick}
              disabled={props.saveButtonDisabled}
            />
          </div>
        </div>
      </form>
      {props.imageFile && (
        <div className="row mb-3">
          <div className="col-sm-12">
            <img height="300" src={props.imageFile} alt="Preview" />
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-sm-12">
          <AlertMessage responseInfo={props.responseInfo} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default VehicleForm;
