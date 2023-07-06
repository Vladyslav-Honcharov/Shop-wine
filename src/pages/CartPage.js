import React from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useSelector, useDispatch } from "react-redux";

import { closeModal, openModal, removeFromCart } from "../redux/actions";
import BuyForm from "../components/Form";

function CartPage() {
  const cartList = useSelector((state) => state.cartList);
  const isModalOpen = useSelector((state) => state.isModal !== null);
  const selectedCardIndex = useSelector((state) => state.isModal);
  const dispatch = useDispatch();

  const renderCartItems = () => {
    return cartList.map((item, index) => (
      <div className="cart m-4" key={index}>
        <div className="cart-text">
          <div>{item.name}</div>
          <div className="cart-price">{item.price} $</div>
          <button className="btn btn-success" onClick={() => handleBuy(index)}>
            Buy
          </button>
        </div>
        <img className="cart-img" src={item.url} alt="" />
        <div className="cart-close" onClick={() => dispatch(openModal(index))}>
          X
        </div>
      </div>
    ));
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const deleteCard = () => {
    dispatch(removeFromCart(selectedCardIndex));
    dispatch(closeModal());
  };

  const handleBuy = (index) => {
    console.log("Buy clicked for card at index", index);
  };

  return (
    <>
      <Header />

      <div className="cart-header">Cart</div>
      <BuyForm />
      <div className="cart-body">{renderCartItems()}</div>
      {isModalOpen && (
        <Modal
          header="Do you want to delete this wine from the cart?"
          closeButton={true}
          background="green"
          action="delete"
          onClose={closeModalHandler}
          btnOne="Delete"
          btnSecond="Cancel"
          onClick={deleteCard}
        />
      )}
    </>
  );
}

export default CartPage;
