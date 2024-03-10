import React from "react";
import classes from "./balanceOverview.css";
import BalanceOverviewIcon from "../../Assets/caretup.svg";
import BalanceOverviewBG from "../../Assets/background.svg";

export const BalanceOverview = () => {
  return (
    <div className="balance-overview">
      <div className="save">
        <p>Savings</p>
        <div className="elipse" />
        <p>5567</p>
      </div>

      <div className="bal-disp">
        <span className="bal">$15,400</span>
        <span className="to-p">86</span>
      </div>

      <button className="btn-A">
        Accounts
        <img src={BalanceOverviewIcon} alt="icon" />
      </button>
    </div>
  );
};
export default BalanceOverview;
