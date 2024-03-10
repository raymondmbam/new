import { useState } from "react";
import logo from "../Assets/finch.svg";
import "./Navbar.css";
import notify from "../Assets/ph_bell.svg";
import user from "../Assets/Ellipse.jpg";

const Navbar = () => {
  const [Notification, setNotification] = useState(6);
  return (
    <div className="containment">
      <div className="navbar">
        <div className="nav">
          <img src={logo} alt="logo" />
        </div>

        <h3>Finch</h3>
      </div>

      <div className="navbar2">
        <div className="notif">
          <img src={notify} alt="logo" />
          <p className="number">{Notification}</p>
        </div>

        <div className="user">
          <img src={user} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
