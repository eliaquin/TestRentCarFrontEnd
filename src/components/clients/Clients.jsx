import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../common/Button";
import * as ActionTypes from "../../store/actions";

class Clients extends Component {
  state = {
    client: {},
    errors: {}
  };

  handleCreateNewClient = () => {
    console.log("Lego");
  };

  validate = () => {
    const errors = {};
    const { client } = this.state;

    if (client.firstName.trim() === "")
      errors.firstName = "First name is required";

      ...
  };

  render() {
    return (
      <div>
        <div className="row">
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
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: ActionTypes.MYACTION })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Clients);
