import React from "react";

const VehicleForm = props => {
  return (
    <React.Fragment>
      <form>
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="">Brand</label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="form-control"
              value={props.vehicle.brand}
              onChange={props.onInputChange}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              className="form-control"
              value={props.vehicle.model}
              onChange={props.onInputChange}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              className="form-control"
              value={props.vehicle.year}
              onChange={props.onInputChange}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="">Color</label>
            <input
              type="text"
              id="color"
              name="color"
              className="form-control"
              value={props.vehicle.color}
              onChange={props.onInputChange}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor="">Daily Price</label>
            <input
              type="text"
              id="dailyPrice"
              name="dailyPrice"
              className="form-control"
              value={props.vehicle.dailyPrice}
              onChange={props.onInputChange}
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default VehicleForm;
