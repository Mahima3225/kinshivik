import React from 'react';


export default function LoginForm() {
  return (
    <div id="login-form-container">

        

        <form id="login-form">

            <div id="login-email-input-container">
                <input id="login-email-input" type="text" placeholder='Email address or username'/>
            </div>
            <div id="login-password-input-container">
                <input id="login-password-input" type="password" placeholder='Password'/>
            </div>


            <div id="login-submit-input-container">
                <input id="login-submit-input" type='submit' placeholder='Login' />
            </div>

        </form>
        


    </div>
  )
}
