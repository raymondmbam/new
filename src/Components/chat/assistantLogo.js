import React from "react";
import "./assistantLogo.css";
import AssistantLogoIcon from "../../Assets/AssistantLogo.svg";

export const AssistantLogo = () => {
  return (
    <div className="aslw">
      <div className="assistant-frame">
        <img className="group" alt="Group" src={AssistantLogoIcon} />
        <div className="text-wrapper">Assistant</div>
      </div>
    </div>
  );
};

export default AssistantLogo;
