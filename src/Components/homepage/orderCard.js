import React from "react";
import classes from "./orderCard.css";
import atmCardIcon from "../../Assets/atmCard.svg";

export const OrderCard = () => {
  return (
    <div className="order-card">
      <div className="text-wrapa">
        <p className="big-txt">
          Order a metal <br /> credit card
        </p>

        <p className="small-txt">
          Earn points fast on dining,
          <br /> supermarkets, travel and more
        </p>
      </div>
      <div className="img-s">
        <img src={atmCardIcon} alt="image" />
      </div>
      <div>
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default OrderCard;
