import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/vehicles">
        Vehicles
      </NavLink>
      <NavLink className="nav-link" to="/clients">
        Clients
      </NavLink>
    </nav>
  );
};

export default Navigation;
