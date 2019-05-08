import React from "react";
import { generateImageUrl } from "../../utils/urls";

const VehicleBox = ({ vehicle, onImageClick, onButtonClick }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="thumbnails">
        <div className="car-pic d-block">
          <img
            src={generateImageUrl(vehicle.imageName)}
            alt={vehicle.brand}
            onClick={onImageClick}
          />
        </div>
        <div className="details">
          <h4 className="title mb-0">{vehicle.brand}</h4>
          <p>
            {vehicle.model} {vehicle.year}
          </p>
          <ul className="car-features d-flex align-content-start flex-wrap">
            <li className="" title="Air conditioning">
              <span className="car-features-icons">
                <strong />
                Air conditioning
              </span>
            </li>
            <li title="Seats">
              <span className="car-features-icons seats">
                <strong />
                {vehicle.numberOfSeats} Seats
              </span>
            </li>
            <li title="Manual transmission">
              <span className="car-features-icons transmission">
                <strong />
                Automatic
              </span>
            </li>
            <li title="Doors">
              <span className="car-features-icons doors">
                <strong />
                {vehicle.numberOfDoors} Doors
              </span>
            </li>
          </ul>
        </div>
        <form className="text-right border-top pt-3">
          <button onClick={onButtonClick} className="btn btn-warning">
            Reserve now
          </button>
        </form>
      </div>
    </div>
  );
};

export default VehicleBox;
