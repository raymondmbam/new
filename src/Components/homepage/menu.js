import React from "react";
import "./menu.css";
import menuIcon from "../../Assets/menus.svg";

export const Menu = () => {
  return (
    <div className="Quick">
      <div className="hding">
        <p>Quick actions</p>
        <img src={menuIcon} alt="menu" />
      </div>
      <div className="btn-ss">
        <button>Transfer</button>
        <button>Pay a bill</button>
        <button>Security Center</button>
      </div>

      <div className="finel">
        <input
          type="text"
          placeholder='"Exchange Rate Today?"'
          className="inpBox"
        />
        <button>Go</button>
      </div>
    </div>
  );
};
export default Menu;
