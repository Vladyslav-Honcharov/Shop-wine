import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/actions";
import Header from "../components/Header";

function FavouritesPage() {
  const favoritesList = useSelector((state) => state.favoritesList);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (index, storageKey) => {
    dispatch(removeFromFavorites(index));
    localStorage.removeItem(storageKey);
  };

  const renderFavouritesItems = () => {
    return favoritesList.map((item, index) => {
      const storageKey = `isFavorite_${item.name}_${item.price}`;
      return (
        <div className="favourites m-4" key={index}>
          <div className="favourites-text">
            <div>{item.name}</div>
            <div>{item.price} $</div>
          </div>
          <img className="favourites-img" src={item.url} alt="" />
          <div
            className="favourites-close"
            onClick={() => {
              handleRemoveFromFavorites(index, storageKey);
            }}
          >
            ♥
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="favourites-header">Your favorite wines</div>
      <div className="favourites-body">{renderFavouritesItems()}</div>
    </>
  );
}

export default FavouritesPage;
