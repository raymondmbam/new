// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./ApproveTransfer.css";
// import vectorDesign from "../Assets/vectordesign.svg";

// const ApproveTransfer = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user, amount } = location.state || {}; // Access user and amount from location state

//   const handleBack = () => {
//     navigate(-1); // Navigate back to the previous page
//   };

//   return (
//     <div className="container">
//       <div className="user-details">
//         <div className="image-container">
//           <img src={user && user.imageUrl} alt={user && user.name} />
//         </div>
//         {user && (
//           <>
//             <div className="text-wrapper">{user.name}</div>

//             <div className="label">
//               <div className="amount-wrapper">${amount}</div>
//             </div>
//           </>
//         )}
//       </div>
//       <div className="payment-card">
//         <div className="overlap-group">
//           <img
//             className="design-vector"
//             alt="Design vector"
//             src={vectorDesign}
//           />
//           <div className="message">Paying with</div>
//           <div className="account-balance">$15,400.86</div>
//           <div className="account-type">Checking account</div>
//           <button className="change-button">
//             <button className="button-text-wrapper">Change</button>
//           </button>
//         </div>
//       </div>

//       <button className="back-button" onClick={handleBack}>
//         Back
//       </button>
//     </div>
//   );
// };

// export default ApproveTransfer;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ApproveTransfer.css";
import vectorDesign from "../Assets/vectordesign.svg";

const ApproveTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, amount } = location.state || {}; // Access user and amount from location state
  const [buttonColor, setButtonColor] = useState("green");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setButtonColor("grey");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="container">
      <div className="user-details">
        <div className="image-container">
          <img src={user && user.imageUrl} alt={user && user.name} />
        </div>
        {user && (
          <>
            <div className="text-wrapper">{user.name}</div>

            <div className="label">
              <div className="amount-wrapper">${amount}</div>
            </div>
          </>
        )}
      </div>
      <div className="payment-card">
        <div className="overlap-group">
          <img
            className="design-vector"
            alt="Design vector"
            src={vectorDesign}
          />
          <div className="message">Paying with</div>
          <div className="account-balance">$15,400.86</div>
          <div className="account-type">Checking account</div>
          <button className="change-button">
            <button className="button-text-wrapper">Change</button>
          </button>
        </div>
      </div>

      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default ApproveTransfer;
