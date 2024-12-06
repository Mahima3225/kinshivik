import React from 'react';
import likefilled from "../../assets/heart-love-like-filled.svg";
import likeempty from "../../assets/heart-love-like-svgrepo-com.svg";
import "../../styles/comment.css";

function Comment({props}) {

  const commentid = props._id;
  // const initiallikes = props.numberOfLikes;

  const [numLikes,setLikes] = React.useState(props.numberOfLikes);

  const [isLiked,setIsLiked] = React.useState(0);
  function toggleLike(){
    setIsLiked(prevState => (prevState === 0 ? 1 : 0));

    if(isLiked == 0){
      // numLikes++;
      setIsLiked(1);
      setLikes((prev)=>prev++);


    }
    else if(isLiked == 1){
      // numLikes--;
      setLikes((prev)=>prev--);

    }
    // setIsLiked(prevState => (prevState === 0 ? 1 : 0));
    console.log(commentid);
     
  }
  return (
    <div id="comment-main-container">
      <div id="comment-about-data">
        <div id="comment-user-id">@{props.userId}</div>
        <div id="comment-created-at">{props.createdAt}</div>
      </div>
        
        <div id="comment-content">{props.content}</div>
        
        <div id="comment-bottom-bar">
            <div id="comment-like-btn" onClick={toggleLike}>
              {isLiked === 0 && <img id="comment-like-btn-svg-empty" src={likeempty}/>}
              {isLiked === 1 && <img id="comment-like-btn-svg-filled" src={likefilled}/>}


            </div>
            {/* <div id="comment-likes">{props.numberOfLikes}</div> */}
            <div id="comment-likes">{numLikes}</div>
        </div>
       

    </div>
  )
}

export default Comment