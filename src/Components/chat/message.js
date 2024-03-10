import AssistantLogo from "./assistantLogo";
import "./message.css";
import bot from "../../Assets/logo.svg";
import user from "../../Assets/Ellipse.jpg";
;

export default function Message({ role, content }) {
  return (
    <div>
    <div className="chat-container">
      <div>
        <img
          src={role === "assistant" ? bot : user}
          className="avatar"
          alt="profile avatar"
        />
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
    </div>
  );
}
