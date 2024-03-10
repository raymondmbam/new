import React from "react";
import classes from "./insightCard.css";
import insightIcon from "../../Assets/insightIcon.svg";
import caretWhiteIcon from "../../Assets/caretup-white.svg";
import upArrowIcon from "../../Assets/up-arrow.svg";

export const InsightCard = () => {
  return (
    <div className="insights">
      <div className="insights-head">
        <div className="insi-icon">
          <img src={insightIcon} />
          <p>Insights</p>
        </div>

        <button className="insights-btn">
          This Week
          <img src={caretWhiteIcon} alt="arrdown" />
        </button>
      </div>

      <div className="insitext">
        <div className="val-insi">
          <p>10%</p>
          <img src={upArrowIcon} alt="arrup" className="immmg" />
        </div>

        <div className="text-insi1">
          <p className="lg-text">
            <span className="wite">increase in your earning</span> from last
            month by end of this month is forecasted.
          </p>

          <p className="lg-text">
            Finch is about to receive 15k new customer which results in 78%
            increase in revenue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
