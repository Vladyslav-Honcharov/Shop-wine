import React from "react";
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  addToCart,
  openModal,
  closeModal,
} from "../redux/actions";

import Button from "./Button";
import Modal from "./Modal";

const Card = ({ name, price, url, color, index }) => {
  const favoritesList = useSelector((state) => state.favoritesList);

  const isFavorite = favoritesList.some(
    (item) => item.name === name && item.price === price
  );

  const isModal = useSelector((state) => state.isModal === index);

  const dispatch = useDispatch();

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (isFavorite) {
      const itemToRemove = favoritesList.findIndex(
        (item) => item.name === name && item.price === price
      );
      dispatch(removeFromFavorites(itemToRemove));
    } else {
      dispatch(addToFavorites(name, price, url, color));
    }
  };

  const handleClick = () => {
    dispatch(openModal(index));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ name, price, url, color, index }));
    dispatch(closeModal());
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="favorite-icon">
        <a href="#!" onClick={toggleFavorite}>
          <FontAwesomeIcon
            icon={isFavorite ? faStar : farStar}
            className={isFavorite ? "star-icon selected" : "star-icon"}
          />
        </a>
      </div>
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{color}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{price} $</li>
      </ul>
      <Button text={"Add to cart"} onClick={handleClick} />
      {isModal && (
        <Modal
          header="Do you want to add this wine to your cart?"
          closeButton={true}
          action="AddCard"
          onClose={handleClose}
          btnOne="Ok"
          btnSecond="Cancel"
          onClick={handleAddToCart}
        />
      )}
    </div>
  );
};

export default Card;
