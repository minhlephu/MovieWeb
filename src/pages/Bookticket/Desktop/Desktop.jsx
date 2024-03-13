import React from "react";
import "./desktop.scss";
import StepCheckout from "./StepCheckout/StepCheckout";
import ListSeat from "../ListSeat/ListSeat";

const Desktop = () => {
  return (
    <div className="book-ticked">
      <div className="book-left">
        <StepCheckout />
        <ListSeat />
      </div>
      <div className="book-right">
        <p>Book right</p>
      </div>
    </div>
  );
};

export default Desktop;
