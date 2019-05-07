import React, { Component } from "react";
import Button from "../common/Button";

class Vehicles extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Vehicles;
