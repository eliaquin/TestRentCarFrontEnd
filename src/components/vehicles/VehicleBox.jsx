import React from "react";

const VehicleBox = props => {
  const { vehicle } = props.vehicle;

  return (
    <div className="col-md-6 col-lg-4">
      <div className="thumbnails">
        <a href="#" className="car-pic d-block">
          <img
            src="https://mediaserver.mbusa.com/iris/iris?client=mb&brand=mbusa&resp=err_status%2Cpng&quality=90&vehicle=2019_e450a4&pov=e01%2Ccgd&paint=2_040&fabric=4_215&sa=0_r31%2C0_h05%2Cnoglints%2Cshadow&width=2880&height=1200&w=6407&h=4678&x=1929&y=2612&bkgnd=transparent"
            alt=""
          />
        </a>
        <div className="details">
          <h4 className="title mb-0">Mercedes-Benz</h4>
          <p>BMW 6 Series Convertible or similar</p>
          <ul className="car-features d-flex align-content-start flex-wrap">
            <li className="" title="Air conditioning">
              <span className="car-features-icons">
                <strong />
                Air conditioning
              </span>
            </li>
            <li title="Seats">
              <span className="car-features-icons seats">
                <strong />4 Seats
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
                <strong />2 Doors
              </span>
            </li>
            <li title="Suitcases">
              <span className="car-features-icons suitcases">
                <strong />1{" "}
              </span>
            </li>
            <li title="Bags">
              <span className="car-features-icons bags">
                <strong />2 Bags
              </span>
            </li>
          </ul>
        </div>
        <form className="text-right border-top pt-3">
          <button className="btn btn-warning">Reserve now</button>
        </form>
      </div>
    </div>
  );
};

export default VehicleBox;
