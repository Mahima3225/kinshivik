import React from 'react';
import HomeMainArticle from './HomeMainArticle';
import array1 from '../../sampledata.js/data1';
export default function HomeMain() {
  return (
    <div id="HomeMain-container">


      <HomeMainArticle {...array1[0]}/>



    </div>
  )
}
