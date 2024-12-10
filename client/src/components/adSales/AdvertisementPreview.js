import React from 'react';
import "../../styles/advertisement.css";

function AdvertisementPreview(props) {
  return (
    <div id="advertisement-preview-container">
        
        <div id="advertisement-preview-sub-container">
            <div id="advertisement-preview-ad-heading">Ad preview</div>
            
            <div id="advertisement-preview-ad-title-container">
                <p>{props.selectedTitle}</p>
            </div>
            <div id="advertisement-preview-ad-image-container">
                <img id="advertisement-creator-img-selected" src={props.selectedImage} />
                
            </div>

        </div>
        
    </div>
  )
}

export default AdvertisementPreview;