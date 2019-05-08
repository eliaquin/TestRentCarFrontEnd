import axios from "axios";
import { getAllClientsUrl, getAllVehiclesAvailableUrl, getVehicleById } from "../utils/urls";

export const LOAD_CLIENTS = "LOAD_CLIENTS";
export const LOAD_VEHICLES = "LOAD_VEHICLES";
export const LOAD_VEHICLE = "LOAD_VEHICLE";

export const updateClients = clients => {
  return {
    type: LOAD_CLIENTS,
    payload: clients
  };
};

export const updateVehicles = vehicles => {
  return {
    type: LOAD_VEHICLES,
    payload: vehicles
  }
}

export const loadVehicles = () => {
  return dispatch => {
    axios.get(getAllVehiclesAvailableUrl)
      .then(result => {
        dispatch(updateVehicles(result.data));
      })
      .catch(error => console.log("Error loading vehicles.", error.message));
  }
}

export const updateVehicle = vehicle => {
  return {
    type: LOAD_VEHICLE,
    payload: vehicle
  }
}

export const loadVehicle = (id) => {
  if (id === undefined) return;
  return dispatch => {
    axios.get(getVehicleById + id)
      .then(result => {
        dispatch(updateVehicle(result.data));
      })
      .catch(error => console.log("Error loading vehicle.", error.message));
  }
}


export const loadClients = () => {
  return dispatch => {
    axios
      .get(getAllClientsUrl)
      .then(result => {
        dispatch(updateClients(result.data));
      })
      .catch(error => {
        console.log("Error loading clients.", error.message);
        dispatch(updateClients({}));
      });
  };
};
