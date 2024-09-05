
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";



export default function CategoryArticlePreview({props}) {
  return (
    <div className="home-main-article-main-link-container">

    
        <Link className="home-main-article-link" to= {`/post/${props.postId}`}>

        
        <div className="home-main-article-main-container">
            <div className="home-main-article-header">

                {/* profile picture container */}
                <div className="home-main-article-header-profile-photo-container">
                    <img className="home-main-article-header-profile-photo" src={require('../../assets/il_570xN.5374292412_49r5.avif')}/>
                    {/* <img src={require(`${props.obj.headerdata.profilepicture}`)}/> */}
                </div>

                <div className="home-main-article-header-name-container">
                    {props.postId}


                </div>

            </div>
            <div className="home-main-article-body">
                <div className="home-main-article-thumbnail-image-container">
                    
                    <img className="home-main-article-thumbnail-image" src={props.imageUrl}/>

                </div>
                <div className="home-article-preview-title-container">
                    {/* {props.mainarticlemeta.articletitle} */}
                    {props.title}
{/* 
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show */}

                </div>
                <div className="home-main-article-description-container">
                    {props.description}
                
                    

                </div>

            </div>
            

        <div className="article-preview-metadata-container">
                <div className="article-preview-metadata-views">
                    1565 views

                </div>
                <div className="article-preview-metadata-date">
                    {/* {props.createdAt} */}
                    {new Date(props.createdAt).toLocaleString()}

                </div>
        </div>


        </div>
        </Link>
    </div>
  )
}

