import * as ActionTypes from './actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.MYACTION:
            //My logic here
            return state;
    }
}

export default reducer;