import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

export default function SubscribedTo(props) {
  return (

    <div className="subscribedTo-main-link-container">


        <Link className='subscribed-to-profile-link' to="/profile/:id">
      
        <div className="subscribedTo-main-container">
            <div className='subscribedTo-profile-photo-container'>
                <img  className="subscribedTo-profile-photo" src={require('../../assets/il_570xN.5374292412_49r5.avif')}/>
            </div> 
            <div className='subscribedTo-profile-name-container'>
                sample Name
                {props.profileName}


            </div>
                  


        </div>
      
      </Link>
    </div>
    
    
  )
}
