// Transfer.js
import React from "react";
import "./TransferHistory.css";
import TransferItem from "../Components/transfer/transferItem"; // Import the TransferItem component
import { useNavigate } from "react-router-dom";
import WFM from "../Assets/wfm.svg";
import Walmart from "../Assets/walmart.svg";
import ALDI from "../Assets/aldi.svg";
import Eleven from "../Assets/7eleven.svg";
import AssistantLogo from "../Components/voice/assistantLogo";
import "./GroceryHistory.css";

export const GroceryHistory = () => {
  return (
    <div className="grocery-history">
      <div className="transf-summary">
        <div className="transfer-page-header">Groceries</div>
        <div className="amount-time-wrapper">
          <div className="total-transfer">-$400.00</div>
          <div className="seperator" />
          <p className="time-period">Jan 11 - Feb 13, 2023</p>
        </div>
      </div>

      {/* Include TransferItem component with dynamic props */}
      <TransferItem
        date="Feb 13, 2024"
        totalAmount="-$600.00"
        transferAmount="-$150.00"
        imgSrc={WFM}
        username="Whole Foods Market"
        time="4:05 PM"
        transferAmount2="-$150.00"
        imgSrc2={Walmart}
        username2="Walmart"
        time2="4:05 PM"
        transferAmount3="-$150.00"
        imgSrc3={ALDI}
        username3="ALDI"
        time3="4:05 PM"
      />

      <TransferItem
        date="Feb 11, 2024"
        totalAmount="-$600.00"
        transferAmount="-$150.00"
        imgSrc={Eleven}
        username="7Eleven"
        time="4:05 PM"
      />

      {/* Add more TransferItem components with different props as needed */}
    </div>
  );
};

export default GroceryHistory;
