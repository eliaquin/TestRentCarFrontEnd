import * as ActionTypes from "./actions";

const initialState = {
  clients: [],
  vehicles: [],
  selectedVehicle: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_CLIENTS:
      return {
        ...state,
        clients: action.payload
      };
    case ActionTypes.LOAD_VEHICLE:
      return {
        ...state,
        selectedVehicle: action.payload
      };
    case ActionTypes.LOAD_VEHICLES:
      return {
        ...state,
        vehicles: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
