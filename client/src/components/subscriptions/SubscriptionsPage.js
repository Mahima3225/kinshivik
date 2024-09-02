import React from 'react';
import SubscribedTo from './SubscribedTo';
import '../../styles/subscriptions.css';
import HomeHeader from '../home/HomeHeader';
import Sidebar from '../home/Sidebar';

export default function SubscriptionsPage() {


  return (


    <div id="subscriptions-page-main-container">
      <div id="Category-Header-Main-Container">
        
        Subscriptions
      </div>


      <HomeHeader/>
      <Sidebar/>

      <div id="subscribed-to-displayer">
        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>

        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>

        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>
        <SubscribedTo/>
      </div>
        





    </div>
  )
}
