import { combineReducers } from "redux";
import { cartListReducer } from "./cartListReducer";
import { favoritesListReducer } from "./favoritesListReducer";
import dataListReducer from "./dataListReducer";
import { isModalReducer } from "./modalFavouriteReducer";
import {
  loadDataFromLocalStorage,
  saveDataToLocalStorage,
} from "./localStorageActions";

const rootReducer = combineReducers({
  cartList: cartListReducer,
  favoritesList: favoritesListReducer,
  dataList: dataListReducer,
  isModal: isModalReducer,
});

// Начальное состояние из localStorage при инициализации хранилища Redux
const initialState = loadDataFromLocalStorage();

const localStorageReducer = (state = initialState, action) => {
  const nextState = rootReducer(state, action);
  saveDataToLocalStorage(nextState);
  return nextState;
};

export default localStorageReducer;
