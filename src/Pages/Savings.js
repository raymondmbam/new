import React from "react";
import "./Savings.css";
import vectorDesign from "../Assets/vectordesign.svg";
import copyIcon from "../Assets/copyIcon.svg";
import card1 from "../Assets/card1.svg";
import card2 from "../Assets/card2.svg";
import card3 from "../Assets/card3.svg";
import createCardIcon from "../Assets/createCardsIcon.svg";

export const Savings = () => {
  return (
    <div className="savings-account">
    
      <div className="savings-card">

        <div className="acct-group">
          <div className="act-ty">
            <p>Savings</p>
          </div>

          <div className="card-bt">
            <p className="bal-txt">Balance</p>
            <p className="bal-ce">$15,400.86</p>
          </div>
          
        </div>

      </div>


      <div className="account-details">

        <div className="details-header">
            <div className="det-txt">
              <h4>Account details</h4>
            </div>
            <button className="copy-button">
              <img className="copy-icon" alt="Copy Icon" src={copyIcon} />
              <p className="cpy-txt">Copy details</p>
            </button>
        </div>

        <div className="group">
          <div className="div-3">
            <div className="div-4">
              <div className="text-wrapper-3">Name</div>
              <div className="text-bold">Josephine Isabella</div>
            </div>
            <div className="div-4">
              <div className="text-wrapper-3">Account number</div>
              <div className="text-bold">0123456789</div>
              <div className="text-2">{""}</div>
            </div>
            <div className="div-4">
              <div className="text-wrapper-3">Routing number</div>
              <div className="text-bold">9876543210</div>
            </div>
            <div className="div-4">
              <div className="text-wrapper-3">Bank name and address</div>
              <p className="p">Finch Bank, Broadmoor Drive, Broadmoor Seatle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="connected-cards">
        <div className="details-header">
          <div className="det-txt">
            <h4>Connected cards</h4>
          </div>
          <button className="copy-button">
            <img className="copy-icon" alt="Copy Icon" src={createCardIcon} />
            <div className="cpy-txt">Create card</div>
          </button>
        </div>

        <div className="card-div">
          <div className="card-one ">
            <img className="logo" alt="Card One" src={card1} />
          </div>
          <div className="card-two">
            <img className="logo" alt="Card Two" src={card2} />
          </div>
          <div className="card-three">
            <img className="logo-2" alt="Card Three" src={card3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
