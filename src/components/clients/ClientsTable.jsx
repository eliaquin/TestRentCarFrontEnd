import React from "react";

const ClientsTable = props => {
  const { clients } = props;
  if (clients !== undefined && Object.keys(clients).length > 0)
    return (
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Identification Number</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(el => {
            return (
              <tr key={el.id}>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.identificationNumber}</td>
                <td>{el.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  return null;
};

export default ClientsTable;
