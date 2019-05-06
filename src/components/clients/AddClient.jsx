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

  handleSubmit = e => {};

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
          onSaveClick={() => {
            console.log("Saved");
          }}
        />
      </React.Fragment>
    );
  }
}
export default AddClient;
