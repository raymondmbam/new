import React from "react";
import "./confirmTransfer.css";

const ConfirmTransfer = ({ user, amount }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.imageUrl} alt={user.name} />
      <p>Amount: ${amount}</p>
    </div>
  );
};

export default ConfirmTransfer;
