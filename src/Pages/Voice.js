import AssistantLogo from "../Components/voice/assistantLogo";
import VoiceInput from "../Components/voice/VoiceInput";
import ResponseComponent from "../Components/voice/responseComponent";
// import Mic from "../Components/voice/voiceButton";

import "./Voice.css";

const Voice = () => {
  return (
    <div className="Voice">
      <AssistantLogo />
      <div className="resp-input">
        <ResponseComponent />
        <VoiceInput />
      </div>
      {/* <Mic /> */}
    </div>
  );
};

export default Voice;
