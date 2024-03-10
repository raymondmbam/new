// import { useState } from "react";import AssistantLogo from "./assistantLogo";
// import "./chatUI.css";
// import Message from "./message";
// import Input from "./textInput";
// import  "./assistantLogo";
// import AccountCards from `./accountCards`;
// import Sam from "../../Assets/revolut.jpg";
// import James from "../../Assets/wise.jpg";
// import Elvis from "../../Assets/finch.jpg";
// import Josephine from "../../Assets/zelle.jpg";


// export default function ChatInterface() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [history, setHistory] = useState([]);

//   const handleSubmit = async () => {
//     const prompt = {
//       role: "user",
//       content: input,
//     };

//     setMessages([...messages, prompt]);

//     await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           // Assistant Persona 
//           { role: "system", content: "You are a virtual banking assistant of FInch bank." },
//           { role: "system", content: "Flo handles requests gracefully regardless of customers’ social class. It is informative, respectful, reliable, accurate, welcoming, helpful. i am gender neutral. I am in my late 20s As an assistant, I should be able to sound humanistic and neutral to customers - from different backgrounds and social classes.I should be able to provide predefined options to customers for quick replies, and to avoid unpredictable responses.I should be able to quickly and accurately respond to customer inquiries." },
           
//           // Assistant Persona 
//            { role: "system", content: "The user's checking account is $15,000." },
//           ...messages, prompt],
//       }),
//     })
//     .then((data) => data.json())
//     .then((completion) => {
//       console.log(completion); // Log the response to inspect its structure
//       const res = completion.choices && completion.choices[0] ? completion.choices[0].message.content : "No response";
//       setMessages((messages) => [
//         ...messages,
//         { role: "assistant", content: res }
//       ]);
//       setHistory((history) => [...history, { question: input, answer: res }]);
//       setInput("");
//     })
//     .catch((error) => {
//       console.error("Error fetching response:", error);
//     });
//   };

//   const clear = () => {
//     setMessages([]);
//     setHistory([]);
//   };
//   function getImageUrl(userName) {
//     switch (userName.toLowerCase()) {
//       case 'sam':
//         return Sam;
//       case 'james':
//         return James;
//       case 'elvis':
//         return Elvis;
//       case 'josephine':
//         return Josephine;
//       default:
//         return '';
//     }
//   }

//   return (
//     <div className="App">
//         <AssistantLogo />
//         <div className="Content">
//           {messages.map((el, i) => {
//             return <Message key={i} role={el.role} content={el.content} />;
//           })}
//         </div>
//         <Input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onClick={input ? handleSubmit : undefined}
//         />
//     </div>
//   );
// }




import React, { useState } from "react";
import AssistantLogo from "./assistantLogo";
import "./chatUI.css";
import Message from "./message";
import Input from "./textInput";
import AccountCards from "./accountCards"; // Import AccountCards component
import Sam from "../../Assets/revolut.jpg";
import James from "../../Assets/wise.jpg";
import Elvis from "../../Assets/finch.jpg";
import Josephine from "../../Assets/zelle.jpg";

export default function ChatInterface() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([]);
  const [displayAccountCards, setDisplayAccountCards] = useState(false); // State to control AccountCards display

  const handleSubmit = async () => {
    const prompt = {
      role: "user",
      content: input,
    };

    setMessages([...messages, prompt]);

    // Phrases to trigger the AccountCards display
    const triggerPhrases = [
      "balance in my account",
      "current amount in my account",
      "money is there in my account",
      "check my account balance",
      "available balance in my account"
    ];

    // Check if the input contains any of the trigger phrases
    if (triggerPhrases.some(phrase => input.toLowerCase().includes(phrase))) {
      setDisplayAccountCards(true); // Display AccountCards
      setMessages(prevMessages => [...prevMessages, { role: "assistant", content: "Which account would you like to see, savings or checking?" }]);
    } else {
      // If the input does not contain trigger phrases, proceed with AI chat
      await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a virtual banking assistant of FInch bank." },
            { role: "system", content: "Flo handles requests gracefully regardless of customers’ social class. It is informative, respectful, reliable, accurate, welcoming, helpful. i am gender neutral. I am in my late 20s As an assistant, I should be able to sound humanistic and neutral to customers - from different backgrounds and social classes.I should be able to provide predefined options to customers for quick replies, and to avoid unpredictable responses.I should be able to quickly and accurately respond to customer inquiries." },
            
            ...messages, prompt],
        }),
      })
      .then((data) => data.json())
      .then((completion) => {
        const res = completion.choices && completion.choices[0] ? completion.choices[0].message.content : "No response";
        setMessages((messages) => [
          ...messages,
          { role: "assistant", content: res }
        ]);
        setHistory((history) => [...history, { question: input, answer: res }]);
        setInput("");
      })
      .catch((error) => {
        console.error("Error fetching response:", error);
      });
    }
  };

  const clear = () => {
    setMessages([]);
    setHistory([]);
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

  return (
    <div className="App">
      
      <AssistantLogo />
      <div className="Content">
        {messages.map((el, i) => {
          return <Message key={i} role={el.role} content={el.content} />;
        })}
        {displayAccountCards && <AccountCards />} {/* Display AccountCards if displayAccountCards is true */}
      </div>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={input ? handleSubmit : undefined}
      />
    </div>
  );
}




























































































































// import React, { useState } from "react";
// import AssistantLogo from "./assistantLogo";
// import "./chatUI.css";
// import Message from "./message";
// import Input from "./textInput";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Sam from "../../Assets/revolut.jpg";
// import James from "../../Assets/wise.jpg";
// import Elvis from "../../Assets/finch.jpg";
// import Josephine from "../../Assets/zelle.jpg";

// export default function ChatInterface() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [history, setHistory] = useState([]);
//   const [recipientName, setRecipientName] = useState("");
//   const [amount, setAmount] = useState(0);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleSubmit = async () => {
//     const prompt = {
//       role: "user",
//       content: input,
//     };

//     setMessages([...messages, prompt]);

//     // Check if the message contains "transfer" or "send"
//     if (input.toLowerCase().includes("transfer") || input.toLowerCase().includes("send")) {
//       if (!recipientName) {
//         alert("Recipient's name is required.");
//         return;
//       }
//       if (amount <= 0) {
//         alert("Amount must be greater than zero.");
//         return;
//       }

//       // Navigate to the transfer page with the extracted information
//       navigate("/approve-transfer/${amount}/${recipientName}", {
//         state: {
//           user: { name: recipientName, imageUrl: getImageUrl(recipientName) },
//           amount: amount
//         }
//       });
//     } else {
//       // If the message does not contain "transfer" or "send", proceed with AI chat
//       await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo",
//           messages: [
//             // Assistant Persona 
//             { role: "system", content: "You are a virtual banking assistant of FInch bank." },
//             { role: "system", content: "Flo handles requests gracefully regardless of customers’ social class. It is informative, respectful, reliable, accurate, welcoming, helpful. i am gender neutral. I am in my late 20s As an assistant, I should be able to sound humanistic and neutral to customers - from different backgrounds and social classes.I should be able to provide predefined options to customers for quick replies, and to avoid unpredictable responses.I should be able to quickly and accurately respond to customer inquiries." },
             
//             // Assistant Persona 
//              { role: "system", content: "The user's checking account is $15,000." },
//             ...messages, prompt],
//         }),
//       })
//       .then((data) => data.json())
//       .then((completion) => {
//         console.log(completion); // Log the response to inspect its structure
//         const res = completion.choices && completion.choices[0] ? completion.choices[0].message.content : "No response";
//         setMessages((messages) => [
//           ...messages,
//           { role: "assistant", content: res }
//         ]);
//         setHistory((history) => [...history, { question: input, answer: res }]);
//         setInput("");
//       })
//       .catch((error) => {
//         console.error("Error fetching response:", error);
//       });
//     }
//   };

//   const clear = () => {
//     setMessages([]);
//     setHistory([]);
//   };

//   function getImageUrl(userName) {
//     switch (userName.toLowerCase()) {
//       case 'sam':
//         return Sam;
//       case 'james':
//         return James;
//       case 'elvis':
//         return Elvis;
//       case 'josephine':
//         return Josephine;
//       default:
//         return '';
//     }
//   }

//   return (
//     <div className="App">
//         <AssistantLogo />
//         <div className="Content">
//           {messages.map((el, i) => {
//             return <Message key={i} role={el.role} content={el.content} />;
//           })}
//         </div>
//         <Input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onClick={input ? handleSubmit : undefined}
//         />
//     </div>
//   );
// }
