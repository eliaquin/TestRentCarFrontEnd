import axios from "axios";
import { getAllClientsUrl } from "../utils/urls";

export const LOAD_CLIENTS = "LOAD_CLIENTS";

export const updateClients = clients => {
  return {
    type: LOAD_CLIENTS,
    payload: clients
  };
};

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
