import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./type";

export const favoritesListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      const index = action.payload;
      return state.filter((item, idx) => idx !== index);
    default:
      return state;
  }
};
