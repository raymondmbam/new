import React, { useState, useEffect } from "react";
import axios from "axios";
import ResponseComponent from "./responseComponent";
import AccountCards from "../../../Components/voice/accountCards";
import keyboardIcon from "../../../Assets/keyboard.svg";
import MicIcon from "../../../Assets/Mic.svg";
import "./voiceCommand.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const voiceflowApiKey = "VF.DM.659966b38e056e0007a70011.1dVnphfYAFKc04Dl"; // Replace with your actual Voiceflow API key
const userID = "user_123";

const VoiceCommand = ({ initialPlaceholder }) => {
  const [inputMode, setInputMode] = useState("voice"); // Set input mode to voice by default
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);
  const [recognition, setRecognition] = useState(null); // State to hold the recognition object
  const navigate = useNavigate(); // Get navigate function from React Router

  useEffect(() => {
    if (inputMode === "voice") {
      const recognitionInstance = new window.webkitSpeechRecognition();
      recognitionInstance.lang = "en-US";
      recognitionInstance.interimResults = true; // Set interimResults to true to get interim results
      recognitionInstance.maxAlternatives = 1;

      recognitionInstance.onresult = async (event) => {
        const interimTranscript = event.results[0][0].transcript;
        setInputValue(interimTranscript);
        setPlaceholder(""); // Clear placeholder when listening

        const response = await axios.post(
          `https://general-runtime.voiceflow.com/state/user/${userID}/interact`,
          {
            action: {
              type: "text",
              payload: interimTranscript, // Use interim transcript for interaction
            },
            config: {
              tts: true,
              stripSSML: true,
              stopAll: true,
              excludeTypes: ["block", "debug", "flow"],
            },
          },
          {
            headers: {
              Authorization: voiceflowApiKey,
            },
          },
        );

        const message =
          response.data[1]?.payload?.message || "No response from Voiceflow";
        setOutputValue(message);
      };

      setRecognition(recognitionInstance); // Set recognition instance to state

      recognitionInstance.start(); // Start listening when component mounts

      return () => {
        recognitionInstance.stop();
      };
    }
  }, [inputMode]); // Run effect when input mode changes

  useEffect(() => {
    if (outputValue === "Your savings balance is $5420") {
      // Trigger navigation to the homepage
      navigate("/savings");
    }
  }, [outputValue, navigate]); // Run effect when outputValue changes

  return (
    <div>
      <div className="response-cont">
        <ResponseComponent response={outputValue} />
        {outputValue ===
        "Which account would you like to access? Savings or Checking?" ? (
          <AccountCards />
        ) : null}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Listening..."
          value={inputValue}
          className="input-field voice-mode"
          readOnly // Make the input field read-only
        />
      </div>
    </div>
  );
};

export default VoiceCommand;
