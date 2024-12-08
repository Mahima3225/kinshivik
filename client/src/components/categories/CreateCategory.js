import React from 'react';
import "../../styles/createcategory.css";

function CreateCategory() {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [file,setFile] = React.useState(null);
    const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
           setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
        setFile(file);
    }
    };
    const [title,setTitle] = React.useState("");
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const [description,setDescription] = React.useState("");
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };




    const submit = async (event) => {
          event.preventDefault()
          const formData = new FormData();
          formData.append("image", file);
          formData.append("title", title);
          formData.append("description", description);
          
          const response = await fetch('http://127.0.0.1:9090/categories/add', {
              method: 'POST',
              body: formData,
              headers: {
                  
              }
          });
          
          if (response.ok) {
              const data = await response.json();
              alert("Space created");
              console.log('Success:', data);
          } else {
              console.error('Error:', response.statusText);
          }
      
      }









  return (
    <div id="create-category-main-container">

        <div id="category-creator-form-container">
            <form onSubmit={submit}>
              <div id="category-create-heading">Create a space </div>
              <div className="category-creator-label-container">
                <label for = "category-creator-img-select-input" id="category-creator-img-select-input-label" className="category-creator-label">
                  Choose an image
                </label>
              </div>

              <div id="cagr-chosen-img-input-display-main">
                <div id="cagr-chosen-img-input-container">
                  <input id = "cagr-chosen-img-input" type="file" onChange={handleImageChange}/>
                </div>
                <div id="cagr-chosen-img-container">
                  <img id="cagr-chosen-img" src={selectedImage} alt="Selected" />
                </div>
              
              </div>







              <div>
                <label className="category-creator-label" for="cagr-name-input">Enter the name of space</label>
              </div>
              <div>
                <input id="cagr-name-input" type="text" onChange={handleTitleChange}/>
              </div>
              
              
              <div>
                <textarea id = "category-creator-description-select-input"
                type="text"  placeholder='Write a description about this space' onChange={handleDescriptionChange}/>
              </div>

              <div id="category-submit-publish-button-container">
                <input id="category-submit-publish-button" type='submit' value="create"/>
              </div>
            </form>
        </div>
    </div>
  )
}

export default CreateCategory;