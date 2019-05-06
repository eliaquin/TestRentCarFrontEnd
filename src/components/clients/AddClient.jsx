import React, { Component } from "react";
import Button from "../common/Button";
import ClientForm from "./ClientForm";
import axios from "axios";

import { typesOfIdUrl } from "../../utils/urls";

class AddClient extends Component {
  state = {
    client: {
      firstName: "",
      lastName: "",
      typeOfId: "",
      idNumber: "",
      phoneNumber: ""
    },
    errors: {},
    typesOfId: []
  };

  componentDidMount = () => {
    this.getTypesOfId();
  };

  //This passes an event. Destructured.
  handleChange = ({ currentTarget: input }) => {
    const client = { ...this.state.client };
    client[input.name] = input.value;
    this.setState({ client });
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
  };

  validate = () => {
    const errors = {};
    const { client } = this.state;

    if (client.firstName.trim() === "")
      errors.firstName = "First name is required";
    if (client.lastName.trim() === "")
      errors.lastName = "Last name is required";
    if (client.idNumber.trim() === "")
      errors.idNumber = "Number of Id is required";
    if (client.phoneNumber.trim() === "")
      errors.phoneNumber = "Phone number is required";

    return errors;
  };

  getTypesOfId = () => {
    axios
      .get(typesOfIdUrl)
      .then(result => {
        this.setState({
          typesOfId: result.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <React.Fragment>
        <div className="row mb-3">
          <div className="col-sm-8">
            <h1>Create New Client</h1>
          </div>
          <div className="col-sm-4 text-right mt-2">
            <Button
              type="primary"
              intendedAction="back"
              text="Back to Clients"
              onClick={() => {
                this.props.history.push("/clients");
              }}
            />
          </div>
        </div>
        <ClientForm
          onInputChange={this.handleChange}
          client={this.state.client}
          typesOfId={this.state.typesOfId}
          errors={this.state.errors}
          onSaveClick={e => {
            this.handleSubmit(e);
          }}
        />
      </React.Fragment>
    );
  }
}
export default AddClient;
