// TransferItem.js
import React from "react";
import "./transferItem.css"; // Create a CSS file for styling if needed

const TransferItem = ({
  date,
  totalAmount,
  transferAmount,
  imgSrc,
  username,
  description,
  time,
  transferAmount2,
  imgSrc2,
  username2,
  description2,
  time2,
  transferAmount3,
  imgSrc3,
  username3,
  description3,
  time3,
}) => {
  return (
    <div className="daily-transfer-wrapper">
      <div class="transfer-header">
        <div className="date-wrapper">{date}</div>
        <div className="total-amount-wrapper">{totalAmount}</div>
      </div>
      <div className="transfer-wrapper">
        <div className="individual-transfer">
          <div className="transfer-amount">{transferAmount}</div>
          <div className="transfer-details">
            <img className="img" alt="Transfer" src={imgSrc} />
            <div className="user-details">
              <div className="username-wrapper">{username}</div>
              <div className="description-wrapper">{description}</div>
              <div className="time-wrapper">{time}</div>
            </div>
          </div>
        </div>
        <div className="individual-transfer">
          <div className="transfer-amount">{transferAmount2}</div>
          <div className="transfer-details">
            <img className="img" alt="Transfer" src={imgSrc2} />
            <div className="user-details">
              <div className="username-wrapper">{username2}</div>
              <div className="description-wrapper">{description2}</div>
              <div className="time-wrapper">{time2}</div>
            </div>
          </div>
        </div>
        <div className="individual-transfer">
          <div className="transfer-amount">{transferAmount3}</div>
          <div className="transfer-details">
            <img className="img" alt="Transfer" src={imgSrc3} />
            <div className="user-details">
              <div className="username-wrapper">{username3}</div>
              <div className="description-wrapper">{description3}</div>
              <div className="time-wrapper">{time3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferItem;
