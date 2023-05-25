// reducers/index.js
import { FETCH_PHOTOS_SUCCESS } from "../actions";

const initialState = {
  photos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
