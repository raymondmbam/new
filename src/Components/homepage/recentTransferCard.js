import React from "react";
import "@fontsource/dm-sans"; // Defaults to weight 400
import classes from "./recentTransferCard.css";
import wiseImage from "../../Assets/wise.jpg";
import zelleImage from "../../Assets/zelle.jpg";
import finchImage from "../../Assets/finch.jpg";
import revolutImage from "../../Assets/revolut.jpg";

export const RecentTransferCard = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Recent Transfers</div>
          <div className="frame">
            <div className="div">
              <img className="img" alt="Wise" src={wiseImage} />
              <div className="frame-2">
                <div className="text-wrapper-2">James</div>
                <div className="text-wrapper-3">$150</div>
              </div>
            </div>

            <div className="div">
              <img className="img" alt="Zelle" src={zelleImage} />
              <div className="frame-2">
                <div className="text-wrapper-2">Josephine</div>
                <div className="text-wrapper-3">$200</div>
              </div>
            </div>
            <div className="div">
              <img className="img" alt="Finch" src={finchImage} />
              <div className="frame-2">
                <div className="text-wrapper-2">Elvis</div>
                <div className="text-wrapper-3">$10</div>
              </div>
            </div>
            <div className="div">
              <img className="img" alt="Revolut" src={revolutImage} />
              <div className="frame-2">
                <div className="text-wrapper-2">Sam</div>
                <div className="text-wrapper-3">$350</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransferCard;
