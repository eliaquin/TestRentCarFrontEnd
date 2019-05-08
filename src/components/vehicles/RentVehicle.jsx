import React, { Component } from "react";
import axios from "axios";
import { loadClients, loadVehicle } from "../../store/actions";
import { formatCurrency } from "../../utils";
import { generateImageUrl, assignVehicletoCustomerUrl } from "../../utils/urls";
import { connect } from "react-redux";
import ClientList from "./../clients/ClientList";
import AlertMessage from "../common/AlertMessage";

class RentVehicle extends Component {
  state = {
    customerIdentification: "",
    responseInfo: {}
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    this.props.onLoadVehicle(id);
    this.props.onLoadClients();
  };

  handleChange = ({ currentTarget: input }) => {
    let customerIdentification = { ...this.state.customerIdentification };
    customerIdentification = input.value;
    this.setState({ customerIdentification });
  };

  assignVehicle = customer => {
    const payload = {
      vehicleId: this.props.vehicle.id,
      customerId: customer.id
    };
    axios
      .post(assignVehicletoCustomerUrl, payload)
      .then(result => {
        this.setState({ responseInfo: result.data });
      })
      .catch(error => {
        this.setState({
          responseInfo: { operationSuccessful: false, message: error.message }
        });
      });
  };

  renderClients = () => {
    return (
      <ClientList
        clients={this.props.clients}
        searchTerm={this.state.customerIdentification}
        onButtonClick={customer => {
          this.assignVehicle(customer);
        }}
      />
    );
  };

  render() {
    const { vehicle } = this.props;
    return (
      <React.Fragment>
        <h1>Rent Vehicle</h1>
        <div className="row">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <img
                  src={generateImageUrl(vehicle.imageName)}
                  width="80%"
                  alt=""
                />
                <h4 className="text-center">
                  {vehicle.brand} {vehicle.model} {vehicle.year}
                </h4>
                <h3 className="text-center black">
                  {formatCurrency(vehicle.dailyPrice)}
                </h3>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <h3>Find customer</h3>
                <input
                  type="text"
                  name="findCustomer"
                  className="form-control"
                  placeholder="Enter Identification Number"
                  value={this.state.customerIdentification}
                  onChange={this.handleChange}
                />
                {this.renderClients()}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <AlertMessage responseInfo={this.state.responseInfo} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { vehicles, clients, selectedVehicle } = state;
  return { vehicles, clients, vehicle: selectedVehicle };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadVehicle: id => dispatch(loadVehicle(id)),
    onLoadClients: () => dispatch(loadClients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RentVehicle);
