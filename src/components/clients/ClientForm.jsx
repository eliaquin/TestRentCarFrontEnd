import React from "react";
import Button from "../common/Button";

const ClientForm = props => {
  return (
    <React.Fragment>
      <div className="row mb-3">
        <div className="col-sm-6 mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
            value={props.client.firstName}
            onChange={props.onInputChange}
          />
          {props.errors["firstName"] && (
            <span className="text-danger small">
              {props.errors["firstName"]}
            </span>
          )}
        </div>
        <div className="col-sm-6 mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
            value={props.client.lastName}
            onChange={props.onInputChange}
          />
          {props.errors["lastName"] && (
            <span className="text-danger small">
              {props.errors["lastName"]}
            </span>
          )}
        </div>
        <div className="col-sm-4 mb-3">
          <label htmlFor="typeOfId">Type of Id</label>
          <select
            name="typeOfId"
            id="typeOfId"
            className="form-control"
            onChange={props.onInputChange}
          >
            {props.typesOfId.map(el => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-4 mb-3">
          <label htmlFor="idNumber">Identification Number</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            className="form-control"
            value={props.client.idNumber}
            onChange={props.onInputChange}
          />
          {props.errors["idNumber"] && (
            <span className="text-danger small">
              {props.errors["idNumber"]}
            </span>
          )}
        </div>
        <div className="col-sm-4 mb-3">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={props.client.phoneNumber}
            onChange={props.onInputChange}
          />
          {props.errors["phoneNumber"] && (
            <span className="text-danger small">
              {props.errors["phoneNumber"]}
            </span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-right">
          <Button
            type="success"
            intendedAction="save"
            text="Save"
            onClick={props.onSaveClick}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientForm;
