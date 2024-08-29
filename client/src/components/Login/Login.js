import React from "react";
import { useEffect, useState } from 'react';
import LoginHeader from "./LoginHeader";
import "../../styles/login.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";





export default function Login(props){
    return(<>



    
    <LoginHeader/>

    {props.showLogin === 1 ? <LoginForm /> : null}

    {props.showLogin === 0 ? <SignupForm/>: null}

    


        


        
    
    
    </>)

}