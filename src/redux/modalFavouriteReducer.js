import { IS_FAVORITE, OPEN_MODAL, CLOSE_MODAL } from "./type";

export const isFavoriteReducer = (state = {}, action) => {
  switch (action.type) {
    case IS_FAVORITE:
      return {
        ...state,
        [action.payload.index]: action.payload.isFavorite,
      };
    default:
      return state;
  }
};

export const isModalReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};
