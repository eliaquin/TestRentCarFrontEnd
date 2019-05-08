import React from "react";

const VehiclesTable = props => {
  const { vehicles } = props;
  if (vehicles !== undefined && Object.keys(vehicles).length > 0)
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Daily Price</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(el => {
            return (
              <tr key={el.id}>
                <td>{el.brand}</td>
                <td>{el.model}</td>
                <td>{el.year}</td>
                <td>{el.color}</td>
                <td>{el.dailyPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  return null;
};

export default VehiclesTable;
