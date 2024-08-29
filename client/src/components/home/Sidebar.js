import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import home from '../../assets/home-svgrepo-com.svg';
import subscriptions from '../../assets/user-following-svgrepo-com.svg';
import categories from '../../assets/collapse-categories-svgrepo-com.svg';
import library from '../../assets/library-add-svgrepo-com.svg';


export default function Sidebar() {
  return (
    <div id="home-sidebar-main-container">

      <div>
          <Link to="/Home">
            <div>
              <div>
                <img id="home-icon-sidebar" src={home}/>
              </div>
              <div>
                Home
              </div>
            </div>
          </Link>
      </div>


      <div>
        <Link to="/Subscriptions">
          <div>
            <div>
              <img id="subscriptions-icon-sidebar" src={subscriptions}/>
            </div>
            <div>
                Subscriptions
            </div>
          </div>
        </Link>
      </div>
      

      
      <div>
        <Link to="/Categories">
          <div>
            <div>
              <img id="categories-icon-sidebar" src={categories}/>
            </div>
            <div>
              Categories
            </div>
          </div>
        </Link>
      </div>
      

     <div>
        <Link to="/Library">
          <div>
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
