// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ResponseComponent from "./responseComponent";
// import AccountCards from "../../../Components/voice/accountCards";
// import keyboardIcon from "../../../Assets/keyboard.svg";
// import MicIcon from "../../../Assets/Mic.svg";
// import "./testgpt.css";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
// import openai from "openai";

// const OPENAI_API_KEY = "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"; // Replace with your OpenAI API key

// const userID = "user_123";

// const OpenAI = ({ initialPlaceholder }) => {
//   const [inputMode, setInputMode] = useState("voice"); // Set input mode to voice by default
//   const [inputValue, setInputValue] = useState("");
//   const [outputValue, setOutputValue] = useState("");
//   const [placeholder, setPlaceholder] = useState(initialPlaceholder);
//   const [recognition, setRecognition] = useState(null); // State to hold the recognition object
//   const navigate = useNavigate(); // Get navigate function from React Router

//   useEffect(() => {
//     if (inputMode === "voice") {
//       const recognitionInstance = new window.webkitSpeechRecognition();
//       recognitionInstance.lang = "en-US";
//       recognitionInstance.interimResults = true; // Set interimResults to true to get interim results
//       recognitionInstance.maxAlternatives = 1;

//       recognitionInstance.onresult = async (event) => {
//         const interimTranscript = event.results[0][0].transcript;
//         setInputValue(interimTranscript);
//         setPlaceholder(""); // Clear placeholder when listening

//         const response = await axios.post(
//           "https://api.openai.com/v1/completions",
//           {
//             model: "text-davinci-003", // Choose the appropriate OpenAI model
//             prompt: interimTranscript,
//             max_tokens: 50,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${OPENAI_API_KEY}`,
//             },
//           },
//         );

//         const message = response.data.choices[0].text || "No response from OpenAI";
//         console.log("OpenAI Response:", response.data); // Console log the response from OpenAI
//         setOutputValue(message);
//       };

//       setRecognition(recognitionInstance); // Set recognition instance to state

//       recognitionInstance.start(); // Start listening when component mounts

//       return () => {
//         recognitionInstance.stop();
//       };
//     }
//   }, [inputMode]); // Run effect when input mode changes

//   useEffect(() => {
//     if (outputValue === "Your savings balance is $5420") {
//       // Trigger navigation to the homepage
//       navigate("/savings");
//     }
//   }, [outputValue, navigate]); // Run effect when outputValue changes

//   return (
//     <div>
//       <div className="response-cont">
//         <ResponseComponent response={outputValue} />
//         {outputValue ===
//         "Which account would you like to access? Savings or Checking?" ? (
//           <AccountCards />
//         ) : null}
//       </div>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Listening..."
//           value={inputValue}
//           className="input-field voice-mode"
//           readOnly // Make the input field read-only
//         />
//       </div>
//     </div>
//   );
// };

// export default OpenAI;



// const API_KEY = process.env.OPEN_API_KEY;
//   const App = () => {


// import { useState, useEffect }  from 'react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   TypingIndicator,
// } from '@chatscope/chat-ui-kit-react';

// const API_KEY ="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"

// export const Voicey = () => {
//   // Your OpenAI API key
  
//     const [messages, setMessages] = useState([
//       {
//         message: "Hello, I'm ChatGPT! Ask me anything!",
//         sentTime: "just now",
//         sender: "ChatGPT",
//       },
//     ]);
//     const [isTyping, setIsTyping] = useState(false);
  
//     const handleSendRequest = async (message) => {
//       const newMessage = {
//         message,
//         direction: 'outgoing',
//         sender: "user",
//       };
  
//       setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setIsTyping(true);
  
//       try {
//         const response = await processMessageToChatGPT([...messages, newMessage]);
//         const content = response.choices[0]?.message?.content;
//         if (content) {
//           const chatGPTResponse = {
//             message: content,
//             sender: "ChatGPT",
//           };
//           setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
//         }
//       } catch (error) {
//         console.error("Error processing message:", error);
//       } finally {
//         setIsTyping(false);
//       }
//     };
  
//     async function processMessageToChatGPT(chatMessages) {
//       const apiMessages = chatMessages.map((messageObject) => {
//         const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
//         return { role, content: messageObject.message };
//       });
  
//       const apiRequestBody = {
//         "model": "gpt-3.5-turbo",
//         "messages": [
//           { role: "system", content: "I'm a Student using ChatGPT for learning" },
//           ...apiMessages,
//         ],
//       };
  
//       const response = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Authorization": "Bearer " + API_KEY,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(apiRequestBody),
//       });
  
//       return response.json();
//     }
  
//     return (
//       <div className="App">
//         <div style={{ position:"relative", height: "800px", width: "100%"}}>
//           <MainContainer>
//             <ChatContainer>       
//               <MessageList 
//                 scrollBehavior="smooth" 
//                 typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
//               >
//                 {messages.map((message, i) => {
//                   console.log(message)
//                   return <Message key={i} model={message} />
//                 })}
//               </MessageList>
//               <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />        
//             </ChatContainer>
//           </MainContainer>
//         </div>
//       </div>
//     )
//   }

// export default Voicey;



// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
//   TypingIndicator,
// } from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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";

// export const Voicey = () => {
//   const navigate = useNavigate(); // Get navigate function from React Router
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, I'm Finch! Ask me anything!",
//       sentTime: "just now",
//       sender: "ChatGPT",
//     },
//   ]);
//   const [isTyping, setIsTyping] = useState(false);



//   const handleSendRequest = async (message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: "user",
//     };

//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setIsTyping(true);

//     try {
//       if (message.toLowerCase().includes("savings")) {
//         // Navigate to the savings page
//         navigate("/savings");
//       } else {
//         const response = await processMessageToChatGPT([...messages, newMessage]);
//         const responseMessage = response.choices[0]?.message?.content;

//         if (responseMessage) {
//           const chatGPTResponse = {
//             message: responseMessage,
//             sender: "ChatGPT",
//           };
//           setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
//         }
//       }
//     } catch (error) {
//       console.error("Error processing message:", error);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   async function processMessageToChatGPT(chatMessages) {
//     const apiMessages = chatMessages.map((messageObject) => {
//       const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
//       return { role, content: messageObject.message };
//     });

//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         { role: "system", content: "Finch handles requests gracefully regardless of customers’ social class. It is informative, respectful, reliable, accurate, welcoming, helpful. i am gender neutral. I am in my late 20s As an assistant, I should be able to sound humanistic and neutral to customers - from different backgrounds and social classes.I should be able to provide predefined options to customers for quick replies, and to avoid unpredictable responses.I should be able to quickly and accurately respond to customer inquiries." },
//         { role: "system", content: "The user's checking acoount is $15,000." },
//         { role: "user", content: "Who won the world series in 2020?" },

//         ...apiMessages,
//       ],
//     };

//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + API_KEY,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(apiRequestBody),
//     });

//     return response.json();
//   }

//   return (
//     <div className="App">
//       <div style={{ position:"relative", height: "800px", width: "100%"}}>
//         <MainContainer>
//           <ChatContainer>       
//             <MessageList 
//               scrollBehavior="smooth" 
//               typingIndicator={isTyping ? <TypingIndicator content="Finch is typing" /> : null}
//             >
//               {messages.map((message, i) => {
//                 console.log(message)
//                 return <Message key={i} model={message} />
//               })}
//             </MessageList>
//             <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />        
//           </ChatContainer>
//         </MainContainer>
//       </div>
//     </div>
//   );
// }

// export default Voicey;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import Sam from "../../../Assets/revolut.jpg";
import James from "../../../Assets/wise.jpg";
import Elvis from "../../../Assets/finch.jpg";
import Josephine from "../../../Assets/zelle.jpg";
import "./testgpt.css";

const API_KEY = "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";

export const Voicey = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Finch! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      if (message.toLowerCase().includes("transfer", "send")) {
        const amountMatch = message.match(/\$([0-9]+(\.[0-9]+)?)/);
        const nameMatch = message.match(/to\s(\w+)/);
        const amount = amountMatch ? parseFloat(amountMatch[1]) : 0;
        const userName = nameMatch ? nameMatch[1] : '';

        navigate("/approve-transfer/${amount}/${userName}", {
          state: {
            user: { name: userName, imageUrl: getImageUrl(userName) },
            amount: amount
          }
        });
      } else {
        const response = await processMessageToChatGPT([...messages, newMessage]);
        const responseMessage = response.choices[0]?.message?.content;

        if (responseMessage) {
          const chatGPTResponse = {
            message: responseMessage,
            sender: "ChatGPT",
          };
          setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
        }
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  function getImageUrl(userName) {
    switch (userName.toLowerCase()) {
      case 'sam':
        return Sam;
      case 'james':
        return James;
      case 'elvis':
        return Elvis;
      case 'josephine':
        return Josephine;
      default:
        return '';
    }
  }

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "Finch handles requests gracefully regardless of customers’ social class. It is informative, respectful, reliable, accurate, welcoming, helpful. i am gender neutral. I am in my late 20s As an assistant, I should be able to sound humanistic and neutral to customers - from different backgrounds and social classes.I should be able to provide predefined options to customers for quick replies, and to avoid unpredictable responses.I should be able to quickly and accurately respond to customer inquiries." },
        { role: "system", content: "The user's checking acoount is $15,000." },
        { role: "user", content: "Who won the world series in 2020?" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  return (
    <div className="App">
      <div style={{ position: "relative", height: "800px", width: "100%" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="Finch is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );

}

export default Voicey;
