import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./type";

export const cartListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const index = action.payload;
      return state.filter((item, idx) => idx !== index);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};
