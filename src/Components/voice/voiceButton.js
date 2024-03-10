// import React from "react";
// import "./voiceButton.css";
// import keyboardIcon from "../../Assets/keyboard.svg";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

// export const Mic = () => {
//   return (
//     <div className="keyboard-frame">
//       <div className="keyboard">
//         <img
//           className="mic-icon"
//           alt="Solar keyboard bold"
//           src={keyboardIcon}
//         />
//       </div>
//     </div>
//   );
// };

// export default Mic;

// import React, { useState } from "react";
// import "./voiceButton.css";
// import keyboardIcon from "../../Assets/keyboard.svg";
// import { Input } from "../../Components/text/input"; // Import the TextInput component

// export const Mic = () => {
//   const [isVoiceInput, setIsVoiceInput] = useState(true); // State to track whether voice input or text input is active

//   // Function to toggle between voice input and text input
//   const toggleInputMode = () => {
//     setIsVoiceInput((prevState) => !prevState); // Toggle the value of isVoiceInput
//   };

//   return (
//     <div className="keyboard-frame">
//       {isVoiceInput ? ( // Render either the Mic icon or the Keyboard icon based on the input mode
//         <div className="keyboard">
//           <img
//             className="mic-icon"
//             alt="Solar keyboard bold"
//             src={keyboardIcon}
//             onClick={toggleInputMode} // Toggle input mode when the icon is clicked
//           />
//         </div>
//       ) : (
//         <Input placeholder="'Exchange rate today'" /> // Render the TextInput component when text input mode is active
//       )}
//     </div>
//   );
// };

// export default Mic;
