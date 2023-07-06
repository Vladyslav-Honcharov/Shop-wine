import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Favourites.scss";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favoritesList = useSelector((state) => state.favoritesList);

  return (
    <>
      <Link to="/favourite">
        <div className="header-favorites position-relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/865/865914.png?w=1480&t=st=1686210082~exp=1686210682~hmac=d037336c91c97beb99564d93fb89daadc2830a0b087c4960100b1f00ad08090c"
            alt=""
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
            {favoritesList.length}
          </span>
        </div>
      </Link>
    </>
  );
};

Favorites.propTypes = {
  favoritesList: PropTypes.array.isRequired,
};

export default Favorites;
