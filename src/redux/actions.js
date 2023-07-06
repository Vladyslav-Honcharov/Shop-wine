import {
  ADD_TO_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITES,
  SET_DATA_LIST,
  OPEN_MODAL,
  CLOSE_MODAL,
  CLEAR_CART,
} from "./type";
import axios from "axios";
export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const addToFavorites = (name, price, url, color) => ({
  type: ADD_TO_FAVORITES,
  payload: {
    name,
    price,
    url,
    color,
  },
});

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const removeFromFavorites = (index) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: index,
  };
};

export const setDataList = (dataList) => ({
  type: SET_DATA_LIST,
  payload: dataList,
});

export const openModal = (index) => ({
  type: OPEN_MODAL,
  payload: index,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const clearCart = (cartList) => ({
  type: CLEAR_CART,
  payload: cartList,
});

export const sendCartData = (cartData, values, state) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("phone", values.phone);

      const productNames = state.cartList.map((item) => item.name);
      const productPrices = state.cartList.map((item) => item.price);

      formData.append("product_name", productNames.join(", "));
      formData.append("product_price", productPrices.join(", "));
      const TOKEN = "5347978233:AAHvtXwjvqX4vp2C4crq-sbjqnjDOzrnM48";
      const CHAT_ID = "-1001722621027";
      const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      // await axios.post("./telegram.php", formData);

      let formDataString = "";
      for (let [key, value] of formData) {
        formDataString += `${key}: ${value}\n`;
      }

      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: formDataString,
      });

      dispatch(clearCart());
    } catch (error) {
      console.log(error);
    }
  };
};
