import React from 'react';
import { useEffect, useState } from 'react';

export default function LoginHeader() {


 

  const[haveToLogin,setHaveToLogin] = React.useState(1);

  return (
    <div id="login-header">

        <div id="login-header-logo">
          {/* <img src={require("../")}/> */}
          <div id="logo-header">
            Kinshivik
          </div>
        </div>


        <div id="login-or-signup-button-container">
          <button id="login-or-signup-button">
            {haveToLogin === 1 && "Sign Up"}
          </button>
        </div>



    </div>
  )
}
