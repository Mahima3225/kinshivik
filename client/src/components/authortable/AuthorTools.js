import React from 'react';
import  { useEffect , useState} from 'react';
import '../../styles/authortools.css';
import Sidebar from '../home/Sidebar';
import HomeHeader from '../home/HomeHeader';


export default function AuthorTools() {











    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");





    const submit = async (event) => {
      event.preventDefault()
  
   


        const formData = new FormData();
        formData.append("image", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("content", content);

        // formData.append('key', 'value'); // Add your form data here
        
        const response = await fetch('http://127.0.0.1:9090/article/create', {
            method: 'POST',
            body: formData,
            headers: {
                // 'Content-Type': 'multipart/form-data' // Do not set this header; fetch will set it automatically
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log('Success:', data);
        } else {
            console.error('Error:', response.statusText);
        }
    
    }











    
  return (
    <>
    <div id="Category-Header-Main-Container">
        
        Write Article
    </div>
    <HomeHeader/>
    <Sidebar/>
    
    <div id="authortools-main-form-container">
      <form id="authortools-form" onSubmit={submit}>

        <div id="authortools-text-title-textarea-container">
          <label id="authortools-text-title-textarea-label" for="authortools-text-title-textarea">Set Title</label>
          <textarea id="authortools-text-title-textarea" value={title} type="text" placeholder='Title' required onChange={e => setTitle(e.target.value)}/>
        </div>

        <div id="authortools-description-textarea-container">
            <label id="authortools-description-textarea-label" for="authortools-description-textarea">Create Description</label>
            <textarea id="authortools-description-textarea" value={description} onChange={e => setDescription(e.target.value)}/>
        </div>


        <div id="authortools-image-input-container">
            <label id="authortools-image-input-label" for="authortools-image-input">Choose Image</label>
            <input onChange={e => setFile(e.target.files[0])} id="authortools-image-input" type="file" accept="image/*"></input>
            {/* <input id="authortools-image-input" type="file"/> */}
        </div>


        <div id="express-your-thoughts">
          Express your thoughts...
        </div>
        

        
        <div id="authortools-content-textarea-container">
            <textarea value={content} onChange={e => setContent(e.target.value)} id="authortools-content-textarea"  required/>
            
        </div>

        <div id="authortools-submit-button-input-container">
           <input id="authortools-submit-input" type="submit"/>
        </div>


        

        
      </form>
    </div>
    
    </>
    
  )
}
