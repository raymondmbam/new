import styles from "./textInput.css";
import SendIcon from "../../Assets/sendIcon.svg";
import MicIcon from "../../Assets/Mic.svg";

export default function Input({ value, onChange, onClick }) {
  return (
    <div className="input">
    <div className="wrapper">
      <input
        className="text"
        placeholder="“Exchange rate today”"
        value={value}
        onChange={onChange}
      />
      <img className="send-icon" alt="Send" src={SendIcon} onClick={onClick} />
    </div>
    <div>
    <img className="mic-icon" alt="Microphone" src={MicIcon}  />
    </div>
    </div>
  );
}