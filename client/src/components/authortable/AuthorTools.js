import React from 'react';
import '../../styles/authortools.css';
import Sidebar from '../home/Sidebar';
import HomeHeader from '../home/HomeHeader';


export default function AuthorTools() {
  return (
    <>
    <div id="Category-Header-Main-Container">
        
        Write Article
      </div>
    <HomeHeader/>
    <Sidebar/>
    
    <div id="authortools-main-form-container">
      <form id="authortools-form">

        <div id="authortools-text-title-textarea-container">
          <label id="authortools-text-title-textarea-label" for="authortools-text-title-textarea">Set Title</label>
          <textarea id="authortools-text-title-textarea" type="text" placeholder='Title' />
        </div>

        <div id="authortools-description-textarea-container">
            <label id="authortools-description-textarea-label" for="authortools-description-textarea">Create Description</label>
            <textarea id="authortools-description-textarea"/>
        </div>


        <div id="authortools-image-input-container">
            <label id="authortools-image-input-label" for="authortools-image-input">Choose Image</label>
            <input id="authortools-image-input" type="file"/>
        </div>


        <div id="express-your-thoughts">
          Express your thoughts...
        </div>
        

        
        <div id="authortools-content-textarea-container">
            <textarea id="authortools-content-textarea"/>
            
        </div>

        <div id="authortools-submit-button-input-container">
           <input id="authortools-submit-input" type="submit"/>
        </div>


        

        
      </form>
    </div>
    
    </>
    
  )
}
