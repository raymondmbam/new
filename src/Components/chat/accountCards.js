import React from "react";
import "./accountCards.css";
import designVector from "../../Assets/designvector.svg";
import vectorDesign from "../../Assets/vectordesign.svg";

export const Accounts = () => {
  return (
    <div className="accounts">
      <div className="checking-card">
        <div className="overlap-group">
          <img
            className="design-vector"
            alt="Design vector"
            src={designVector}
          />
          <div className="balance">$7,400.86</div>
          <button className="button">
            <button className="button-text-wrapper">See details</button>
          </button>
        </div>
        <div className="account-type">Checking</div>
        <div className="balance-wrapper">Balance</div>
      </div>
      <div className="savings-card">
        <div className="overlap-group">
          <img
            className="design-vector"
            alt="Design vector"
            src={vectorDesign}
          />
          <div className="account-type">Savings</div>
          <div className="balance">$15,400.86</div>
          <div className="text-wrapper">Balance</div>
          <button className="button">
            <button className="button-text-wrapper">See details</button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
