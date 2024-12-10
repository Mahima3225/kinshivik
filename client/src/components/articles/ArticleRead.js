import React from 'react';
import { useState,useEffect } from 'react';
import { useParams,Outlet, useNavigate, Link } from 'react-router-dom';
import '../../styles/articleread.css';
import Commentbox from '../commentbox/Commentbox';
import ArticleShare from './ArticleShare';
import ArticleForward from './ArticleForward';
import Forward from "../../assets/forward-svgrepo-com.svg"



export default function ArticleRead(props) {

    

    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [showCommentbox,setShowCommentBox] = useState(0);
    const [commentcontent, setCommentContent] = React.useState(" ");
    const [showForwardModal, setShowForwardModel] = React.useState(0);
    const navigate = useNavigate();

     
    const [selectedCategory,setSelectedCategory] = React.useState("");

    
    
    const toggleCommentBox = () => {
        console.log("toggled");
        setShowCommentBox(prevState => (prevState === 0 ? 1 : 0));
        //  navigate("commentbox");
    };
    const toggleForwardModal = () => {
        console.log("toggled");
        setShowForwardModel(prevState => (prevState === 0 ? 1 : 0));
        //  navigate("commentbox");
    };
    const propsforwardmodel = {
        showForwardModal: showForwardModal,
        toggleForwardModal : toggleForwardModal,
        setSelectedCategory : setSelectedCategory,
    }



    useEffect(() => {
        // Fetch the article using the id
        const addToCategory = async () => {
            try {
                if(selectedCategory !== ""){

                
                    const response = await 
                    fetch(`http://localhost:9090/category/${selectedCategory}/add/${id}`);
                    const data = await response.json();
                    console.log(data);
                    if(data.Success === "true"){
                        alert("Sucessfully added to space");
                    }
                }
            } catch (error) {
                console.error('Error adding to space', error);
            }
        };

        addToCategory();
    }, [selectedCategory]);



    useEffect(() => {
        // Fetch the article using the id
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:9090/post/${id}`);
                const data = await response.json();
                console.log(data);
                setArticle(data);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);


    useEffect(()=>{
        if(showCommentbox == 1){
            try{


            }catch(error){
                console.error('Error fetching article:', error);

            }
        }

    },[showCommentbox]);








    const submitcomment = async (event) => {
        event.preventDefault();
    
     
  
  
          

        const formData = {
            userid: localStorage.getItem('userid'),
            numberOfLikes: 0,
            content: commentcontent,
            postId: id,
            commentBoxId: "commentbox" + id 
        };
          
  
          // formData.append('key', 'value'); // Add your form data here

          console.log("outgoing comment",commentcontent);
          console.log("outgoing userid",localStorage.getItem('userid'));
          
          const response = await fetch(`http://127.0.0.1:9090/post/${id}/commentbox`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
              
          });
          
          if (response.ok) {
              const data = await response.json();
              alert("comment submitted");
              console.log('Success:', data);
          } else {
              console.error('Error:', response.statusText);
          }
      
    }



















    if (!article) {
        return <div>Loading...</div>;
    }

  return (
    <div id="article-reading-view-whole-super-container">
    
    
    
    <div id="article-reading-view-main-container">
        <div id="article-title">
            {/* {props.title} */}
            {article.title}

        </div>
        <div id="article-description">
            {/* {props.description} */}
            {article.description}


        </div>

        <div id="metadata-forward-button-article-container">

            <div id="metadata-article-container">
                <p><strong>Category:</strong> {article.category}</p>
                <p><strong>Published on:</strong> {new Date(article.createdAt).toLocaleString()}</p>

            </div>
            

            <div id="forward-button-container">
                <button id="forward-button" onClick={toggleForwardModal}>
                    <img id="forward-button-svg" src={Forward}/>
                </button> 
            </div>
        </div>

        
        <div id="article-thumbnail-image-container">
            {/* <img src={props.imageurl} alt={props.title}/> */}
            <img src={article.imageUrl} alt={article.title} />
        </div>

        <div id="article-content">
            {/* {props.content}
             */}
             {article.content}

        </div>
        
        




    </div>


    {showForwardModal===1 && <ArticleForward {...propsforwardmodel}/>}



    <ArticleShare/>




    <div id="commentbox-main-container">
        {/* <div id="commentbox-comment-heading">Comments</div> */}
        <div id="commentbox-write-comment-section">

            <form onSubmit={submitcomment}>

          
                <div id="express-your-thoughts">
                    Express your thoughts...
                </div>
      
                <textarea value={commentcontent} onChange={e => setCommentContent(e.target.value)} id="comment-content-textarea"  required/>


                
                <div id="authortools-submit-button-input-container">
                    <input type='submit' value="Post"/>    
                </div>   

                

            </form>
            

        </div>
    </div>






















    <div id="show-comments-button-container">
        <button id="show-comments-button" onClick={toggleCommentBox}>{showCommentbox=== 0? "Show Comments":"Hide Comments"}</button>
    </div>

    



    {/* {showCommentbox === 1 && <Outlet context={showCommentbox}/>} */}
    {showCommentbox === 1 && <Commentbox/>}
    </div>
  )
}



