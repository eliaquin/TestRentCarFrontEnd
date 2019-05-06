import React, { Component } from "react";
import Button from "../common/Button";
import ClientsTable from "./ClientsTable";
import { loadClients } from "../../store/actions";
import { connect } from "react-redux";

class Clients extends Component {
  componentDidMount = () => {
    this.props.onLoadClients();
  };
  handleCreateNewClient = () => {
    console.log("Lego");
  };

  render() {
    return (
      <div>
        <div className="row mb-3">
          <div className="col-sm-8">
            <h1>Clients</h1>
          </div>
          <div className="col-sm-4 text-right mt-2">
            <Button
              type="primary"
              intendedAction="add"
              text="Create New Client"
              onClick={() => {
                this.props.history.push("/clients/add");
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ClientsTable clients={this.props.clients} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { clients } = state;
  return { clients };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadClients: () => dispatch(loadClients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
