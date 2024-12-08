import React from 'react';
import AdvertisementHeader from './AdvertisementHeader';
import AdvertisementCreator from './AdvertisementCreator';
import AdvertisementPreview from './AdvertisementPreview';
import "../../styles/advertisement.css";

function Advertisement() {

const [selectedImage, setSelectedImage] = React.useState(null);
const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
           setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
    }
};

const [selectedTitle, setSelectedTitle] = React.useState(null);
const handleTitleChange = (event) => {
    
        setSelectedTitle(event.target.value);
       
     
};
const propsobject = {
    selectedImage : selectedImage,
    setSelectedImage : setSelectedImage,
    handleImageChange : handleImageChange,
    selectedTitle : selectedTitle,
    setSelectedTitle : setSelectedTitle,
    handleTitleChange : handleTitleChange,

}
const propsobject2 = {
    selectedImage : selectedImage,
    selectedTitle : selectedTitle,
    

}
  return (

    <>
        
    <AdvertisementHeader/>

    <div id="advertisement-main-body">
        <AdvertisementCreator {...propsobject}/>
        <AdvertisementPreview {...propsobject2}/>

    </div>
    
    
    </>
  )
}

export default Advertisement;