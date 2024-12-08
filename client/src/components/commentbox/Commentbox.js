import React from 'react';
import "../../styles/commentbox.css";
import loading from "../../assets/Gear@1x-0.2s-200px-200px.svg"
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

function Commentbox() {
    const { id } = useParams();
    const [comments, setComments] = React.useState(null);
    const [content, setContent] = React.useState(null);

    // const submit = async (event) => {
    //     event.preventDefault()
    //     const formData = new FormData();
    //     formData.append("image", file);
    //     formData.append("title", title);
    //     formData.append("description", description);
    //     formData.append("content", content);
    //     // formData.append('key', 'value'); // Add your form data here
    //     const response = await fetch('http://127.0.0.1:9090/post/:id/commentbox', {
    //         method: 'POST',
    //         body: formData,
    //         headers: {
    //             // 'Content-Type': 'multipart/form-data' // Do not set this header; fetch will set it automatically
    //         }
    //     });
    //     if (response.ok) {
    //         const data = await response.json();
    //         alert("post submitted");
    //         console.log('Success:', data);
    //     } 
    //     else {
    //         console.error('Error:', response.statusText);

    //     }
    // }
    
    useEffect(() => {
        // Fetch the article using the id
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:9090/post/${id}/commentbox`);
                const data = await response.json();
                console.log(data.commentsArray);
                const commentsarraytorender = data.commentsArray;
                setComments(commentsarraytorender);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, []);

    if (!comments) {
        return <div>Loading...
            <img id="loading-svg-commentbox" src={loading}/>
        </div>;
    }
  return (
    <div id="commentbox-main-container">
        <div id="commentbox-comment-heading">Comments</div>
        {/* <div id="commentbox-write-comment-section">

            <form>

          
                <div id="express-your-thoughts">
                    Express your thoughts...
                </div>
      
                <textarea value={content} onChange={e => setContent(e.target.value)} id="comment-content-textarea"  required/>


                
                <div id="authortools-submit-button-input-container">
                    <input type='submit' value="Post"/>    
                </div>   

                

            </form>
            

        </div> */}
        

        {/* <div>
           {comments.map((comment, index) => ( <div key={index}>{comment.content}</div> ))} 
        </div> */}
        <div>
           {/* {comments.map((comment, index) => ( <Comment key={index} props={comment}/> ))}  */}
           {comments.map((comment) => ( <Comment key={comment.commentId} props={comment}/> ))} 
        </div>
        
       
    
    
    </div>
  )
}

export default Commentbox;