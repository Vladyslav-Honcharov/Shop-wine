import "./CardList.scss";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setDataList, sendCartData } from "../redux/actions";
import React, { useEffect } from "react";

import axios from "axios";

const CardList = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const response = await axios.get("data.json");
      dispatch(setDataList(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const dataList = useSelector((state) => state.dataList);

  return (
    <div className="card-list container">
      {dataList.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          price={card.price}
          url={card.url}
          color={card.color}
          index={index}
        />
      ))}
    </div>
  );
};
CardList.propTypes = {
  dataList: PropTypes.array.isRequired,
};

export default CardList;
