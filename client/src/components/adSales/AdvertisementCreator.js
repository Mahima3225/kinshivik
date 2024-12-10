import React from 'react';
import "../../styles/advertisement.css";

function AdvertisementCreator(props) {


  const [file, setFile] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [budget, setBudget] = React.useState(null);
  const [url, setUrl] = React.useState(null);
  const [categoryIdAd, setCategoryIdAd] = React.useState(null);

  function onChangeTitle(event){
    props.handleTitleChange(event);
    setTitle(event.target.value);

  }
  function onChangeBudget(event){
    setBudget(event.target.value);

  }
  function onChangeUrl(event){
    setUrl(event.target.value);

  }
  function onChangeCategoryIdAd(event){
    setCategoryIdAd(event.target.value);

  }
  function onChangeImageFile(event){
    const file = event.target.files[0];
    setFile(file);
    props.handleImageChange(event);
    
  }

  const submit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("budget", budget);
    formData.append("url", url);
    formData.append("categoryIdAd", categoryIdAd);
    
    
    
    const response = await fetch('http://127.0.0.1:9090/advertise/category', {
        method: 'POST',
        body: formData,
        headers: {
            
        }
    });
    
    if (response.ok) {
        const data = await response.json();
        alert("Advertisement published");
        console.log('Success:', data);
    } else {
        console.error('Error:', response.statusText);
        alert("Uh oh something went wrong");
    }

}
  return (
    <div id="advertisement-creator-container">
        <div id="advertisement-creator-form-container">
            <form onSubmit={submit}>
              <div id="advertisement-create-ad-heading">Create Ad </div>
              <div class="ad-creator-label-container">
                <label for = "advertisement-creator-img-select-input" id="advertisement-creator-img-select-input-label" class="ad-creator-label">
                  Choose an image
                </label>
              </div>
              <div id="ad-creator-img-input-and-display-container">
                <div>
                  <input id = "advertisement-creator-img-select-input" type="file" onChange={onChangeImageFile}/>
                </div>
                <div id="chosen-image-container">
                  <img id="advertisement-creator-img-selected" src={props.selectedImage} alt="Selected" />
                </div>
                
                
              </div>
              
              <div class="ad-creator-label-container">
                <label id = "advertisement-creator-title-select-input-label" for = "advertisement-creator-title-select-input" class="ad-creator-label">
                  Headline

                </label>

              </div>
              <div>
                <textarea id = "advertisement-creator-title-select-input"
                type="text"  placeholder='Write a compelling headline' onChange={onChangeTitle}/>
              </div>
              {/* <div>{props.selectedTitle}</div> */}

              {/* <div>Hello {props.selectedTitle}</div> */}



              <div class="ad-creator-label-container">
                <label id="advertisement-creator-url-select-input-label" for="advertisement-creator-url-select-input" class="ad-creator-label">Destination url</label>
              </div>

              <div>

                <input id = "advertisement-creator-url-select-input" type="text" placeholder='Enter the destination url' onChange={onChangeUrl}/>

              </div>

              <div class="ad-creator-label-container">
                <label id="advertisement-creator-call-to-action-select-input-label" for="advertisement-creator-call-to-action-select-input" class="ad-creator-label" >Call to action </label>

              </div>
              <div>

                <select id="advertisement-creator-call-to-action-select-input" placeholder="select..">
                    <option value="" disabled defaultValue hidden>Select...</option>
                    <option value="Download">
                      Download
                    </option>
                    <option value="Shop now">
                      Shop now
                    </option>
                    <option value="Install">
                      Install
                    </option>
                    <option value="Order now">
                      Order now
                    </option>
                    <option value="Shop now">
                      Shop now
                    </option>
                    <option value="Visit">
                      Visit
                    </option>
                    <option value="Learn more">
                      Learn more 
                    </option>

                </select>
              </div>


              <div class="ad-creator-label-container">
                <label id="advertisement-creator-category-selector-label" for="advertisement-creator-category-selector" class="ad-creator-label">Enter category id </label>
              </div>


              <div>
                <input onChange={onChangeCategoryIdAd} id="advertisement-creator-category-selector" type="text"></input>
              </div>


              <div class="ad-creator-label-container">
                <label id="advertisement-creator-budget-selector-label" for="advertisement-creator-budget-selector" class="ad-creator-label">Enter your campaign budget (Use $Ad credits)</label>
              </div>


              <div>
                <input onChange={onChangeBudget} id="advertisement-creator-budget-selector" type="text"></input>
              </div>

              <div id="ad-submit-publish-button-container">
                <input id="ad-submit-publish-button" type='submit' value="Publish"/>
              </div>
              
              
              
              

            </form>  
          
        </div> 
    </div>
  )
}

export default AdvertisementCreator;