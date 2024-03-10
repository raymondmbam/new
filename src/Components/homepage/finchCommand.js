import React, { useState } from "react";
import "./finchCommand.css";
import menuIcon from "../../Assets/menus.svg";
import MicIcon from "../../Assets/Mic.svg";
import SpeechWave from "./commands/siriWaves";
import ChatInterface from "../../Components/chat/chatUI";


export const FinchCommand = () => {
  const [isMicClicked, setIsMicClicked] = useState(false);

  const toggleMic = () => {
    setIsMicClicked(!isMicClicked);
  };

  return (
    <div className="Quick">
      <div>
        <ChatInterface/>
        {isMicClicked && <SpeechWave />}
      </div>
      <div className="chat">
      </div>

      <div className="hding">
        <p>Quick actions</p>
        <img src={menuIcon} alt="menu" />
      </div>
      <div className="btn-ss">
        <button>Transfer</button>
        <button>Pay a bill</button>
        <button>Security Center</button>
      </div>
    </div>
  );
};

export default FinchCommand;


// <img className="mic-icon" alt="Microphone" src={MicIcon} onClick={toggleMic} />