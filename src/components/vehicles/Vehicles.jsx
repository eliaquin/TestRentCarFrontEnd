import React, { Component } from "react";
import VehiclesTable from "./VehiclesTable";
import Button from "../common/Button";
import axios from "axios";
import { getAllVehiclesUrl } from "../../utils/urls";

class Vehicles extends Component {
  state = {
    vehicles: {}
  };

  componentDidMount() {
    axios
      .get(getAllVehiclesUrl)
      .then(result => {
        this.setState({ vehicles: result.data });
      })
      .catch(error => console.log(error));
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
            <VehiclesTable vehicles={this.state.vehicles} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Vehicles;
