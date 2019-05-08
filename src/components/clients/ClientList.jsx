import React from "react";

const ClientList = ({ clients, searchTerm, onButtonClick }) => {
  const selectedClients =
    searchTerm.length > 0
      ? clients.filter(el => el.identificationNumber.includes(searchTerm))
      : [];
  return (
    <ul className="list-group">
      {selectedClients.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.firstName} {el.lastName}. Phone: {el.phoneNumber}{" "}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onButtonClick(el)}
          >
            <i className="fas fa-car-side" /> Assign Car
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
