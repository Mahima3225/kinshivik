import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import home from '../../assets/home-svgrepo-com.svg';
import subscriptions from '../../assets/user-following-svgrepo-com.svg';
import categories from '../../assets/collapse-categories-svgrepo-com.svg';
import library from '../../assets/library-add-svgrepo-com.svg';


export default function Sidebar() {
  return (
    <div id="home-sidebar-main-container">

      <div id="home-icon-sidebar-link-container">
          <Link to="/Home" id="home-icon-link">
            <div id="home-icon-and-title-container">
              <div>
                <img id="home-icon-sidebar" src={home}/>
              </div>
              <div>
                Home
              </div>
            </div>
          </Link>
      </div>


      <div id="subscriptions-icon-sidebar-link-container">
        <Link to="/Subscriptions" id="subscriptions-icon-link">
          <div id = "subscriptions-icon-and-title-container">
            <div>
              <img id="subscriptions-icon-sidebar" src={subscriptions}/>
            </div>
            <div>
                Subscriptions
            </div>
          </div>
        </Link>
      </div>
      

      
      <div id="categories-icon-sidebar-link-container">
        <Link to="/Category" id="categories-icon-link">
          <div id = "categories-icon-and-title-container">
            <div>
              <img id="categories-icon-sidebar" src={categories}/>
            </div>
            <div>
              Categories
            </div>
          </div>
        </Link>
      </div>
      

     <div id="library-icon-sidebar-link-container">
        <Link to="/Library" id="library-icon-link">
          <div id = "library-icon-and-title-container">
            <div>
              <img id="library-icon-sidebar" src={library}/>
            </div>
            <div>
                Library
            </div>
          </div>
        </Link>
     </div>
      
      



    </div>
  )
}
