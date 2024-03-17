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
import wise from '../Assets/wise.jpg'

const ApproveTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, amount } = location.state || {}; // Access user and amount from location state
  const [buttonColor, setButtonColor] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setButtonColor(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="con-tain">

      <div className="user-det">
        <div className="image-container">
          <img src={user && user.imageUrl} alt={user && user.name} />
          <img src = {wise} alt="wise" />
          <p className="userName">Jack </p>
    
        </div>

        <div className="Amounts">
          <h1>$50.00</h1>
        </div>
        {user && (
          <>
            // <div className="text-wrapper">{user.name}</div>  
            <p>Jack Flinn</p>

            <div className="label">
              <div className="amount-wrapper">${amount}</div>
            </div>
          </>
        )}
      </div>

      <div className="p-card">
          <img
            className="design-vector"
            alt="Design vector"
            src={vectorDesign}
          />
        <div className="over-group">
          
          <div className="message">Paying with</div>

          <div className="crd-d">

            <div className="va-ls">
               <div className="account-type">Checking account</div>
               <div className="account-balance">$15,400.86</div>
            </div>
           
            <div className="change-button">
              <button className="chg-bt">Change</button>
            </div>

          </div>
         
        </div>
      </div>

      <button className={buttonColor ? "back-button" : "btn-disable"} onClick={handleBack}>
        Cancel
      </button>
    </div>
  );
};

export default ApproveTransfer;
