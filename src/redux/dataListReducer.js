import { SET_DATA_LIST } from "./type";

const initialState = [];

const dataListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default dataListReducer;
