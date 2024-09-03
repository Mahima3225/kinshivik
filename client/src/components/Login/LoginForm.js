import React from 'react';
import  { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


export default function LoginForm() {

    const navigate = useNavigate(); 

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit = async (event)=>{
        event.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        setEmail(email);
        setPassword(password);
        const formData = { "email": email, "password": password };

        try {
            const response = await fetch('http://127.0.0.1:9090/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            const result = await response.json();
            setPassword('');
            setEmail('');
            if(result.isValid === 'true'){
                navigate('/home');

            }
            else{
                alert("Not valid Password or Email");
            }
            // navigate('/home');
            console.log('Success:', result);
        
            // setPassword('');
            // setEmail('');
            
            // setMessage('Form submitted successfully!');
          } catch (error) {
            console.error('Error:', error);
            // setMessage('Failed to submit the form.');
          }

    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
  return (
    <div id="login-form-container">
        <div id="login-title">Login</div>

        

        <form id="login-form" onSubmit={handlesubmit}>


            <div id="login-email-title">Email</div>

            <div id="login-email-input-container">
                <input id="login-email-input" type="text" value={email} placeholder='Email address or username'  required onChange={handleChangeEmail}/>
            </div>

            <div id="login-password-title">Password</div>
            <div id="login-password-input-container">
                <input id="login-password-input" type="password"  value={password}placeholder='Password' required onChange={handleChangePassword}/>
            </div>


            <div id="login-submit-input-container">
                <input id="login-submit-input" type='submit' placeholder='Login'  />
            </div>

        </form>
        


    </div>
  )
}
