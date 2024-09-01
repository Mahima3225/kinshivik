import React from 'react';
import write from '../../assets/write-svgrepo-com.svg';
import profile from '../../assets/profile-1341-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';


export default function HomeHeader() {

  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/myprofile');
  };
  const handleClick2 = () => {
    navigate('/author/compose');
  };
  return (

    
    <div id="home-header-main-container">

        <div id="home-header-logo-container">
          
          <div id="home-header-logo">
            Kinshivik
          </div>
        </div>

        <div id="header-buttons-div-container">
          <div id="header-compose-button-container">
            <button id="header-compose-button" title='Write' onClick={handleClick2}>
              <img id="write-icon-header" src={write}/>
            </button>
          </div>
          <div id="header-profile-button-container">
            <button id="header-profile-button" title='Profile' onClick={handleClick} >
              <img id="profile-icon-header" src= {profile}/>
            </button>
          </div>
          
        </div>


       



    </div>
  )
}
