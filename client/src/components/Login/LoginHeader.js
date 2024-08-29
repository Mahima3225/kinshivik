import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function LoginHeader() {


 

  const[haveToLogin,setHaveToLogin] = React.useState(0);
  const navigate = useNavigate();


  function ChangeButtonText(){

    

  
    if(haveToLogin === 1){
      setHaveToLogin(0);

      
      navigate('/login');
     
    }
    else if(haveToLogin === 0){
      setHaveToLogin(1);
      navigate('/signup');
    }
  }

  return (
    <div id="login-header">

        <div id="login-header-logo">
          
          <div id="logo-header">
            Kinshivik
          </div>
        </div>


        <div id="login-or-signup-button-container">
          <button id="login-or-signup-button" onClick={ChangeButtonText}>
            {haveToLogin === 0 && "Sign Up"}
            {haveToLogin === 1 && "Login"}

          </button>
        </div>



    </div>
  )
}













// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function LoginHeader() {
//   const [haveToLogin, setHaveToLogin] = React.useState(0);
//   const navigate = useNavigate();

//   function ChangeButtonText() {
//     if (haveToLogin === 1) {
//       setHaveToLogin(0);
//       navigate('/login');
//     } else if (haveToLogin === 0) {
//       setHaveToLogin(1);
//       navigate('/signup');
//     }
//   }

//   return (
//     <div id="login-header">
//       <div id="login-header-logo">
//         {/* <img src={require("../")}/> */}
//         <div id="logo-header">Kinshivik</div>
//       </div>
//       <div id="login-or-signup-button-container">
//         <button id="login-or-signup-button" onClick={ChangeButtonText}>
//           {haveToLogin === 0 ? 'Sign Up' : 'Login'}
//         </button>
//       </div>
//     </div>
//   );
// }

