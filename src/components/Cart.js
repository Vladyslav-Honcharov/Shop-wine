import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartList = useSelector((state) => state.cartList);
  return (
    <>
      <Link
        to={{
          pathname: "/cart",
        }}
      >
        <div className="header-cart position-relative">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png?w=1480&t=st=1686209698~exp=1686210298~hmac=95cc9da100959496b0edcea96b6385329b81f5259f40f673f5862a393b6ff391"
            alt=""
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
            {cartList.length}
          </span>
        </div>
      </Link>
    </>
  );
};

export default Cart;
