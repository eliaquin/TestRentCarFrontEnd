import axios from "axios";
import { getAllClientsUrl, getAllVehiclesUrl } from "../utils/urls";

export const LOAD_CLIENTS = "LOAD_CLIENTS";
export const LOAD_VEHICLES = "LOAD_VEHICLES";

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
    axios.get(getAllVehiclesUrl)
      .then(result => {
        dispatch(updateVehicles(result.data));
      })
      .catch(error => console.log("Error loading vehicles.", error.message));
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
