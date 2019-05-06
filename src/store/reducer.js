import * as ActionTypes from "./actions";

const initialState = {
  clients: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_CLIENTS:
      return {
        ...state,
        clients: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
