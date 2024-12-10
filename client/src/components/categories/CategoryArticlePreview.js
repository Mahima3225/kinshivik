
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";

import "../../styles/categoryarticles.css";

export default function CategoryArticlePreview({props}) {
  return (
    <div className="category-article-main-link-container">

    
        <Link className="category-main-article-link" to= {`/post/${props.postId}`}>

        
        <div className="category-article-main-container">
            <div className="category-article-header">

                {/* profile picture container */}
                <div className="category-article-header-profile-photo-container">
                    <img className="category-article-header-profile-photo" src={require('../../assets/il_570xN.5374292412_49r5.avif')}/>
                    {/* <img src={require(`${props.obj.headerdata.profilepicture}`)}/> */}
                </div>

                <div className="category-article-header-name-container">
                    {props.postId}


                </div>

            </div>
            <div className="category-article-body">
                <div className="category-article-thumbnail-image-container">
                    
                    <img className="category-article-thumbnail-image" src={props.imageUrl}/>

                </div>
                <div className="category-preview-title-container">
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
                <div className="category-article-description-container">
                    {props.description}
                
                    

                </div>

            </div>
            

        <div className="category-article-preview-metadata-container">
                <div className="category-article-preview-metadata-views">
                    1565 views

                </div>
                <div className="category-article-preview-metadata-date">
                    {/* {props.createdAt} */}
                    {new Date(props.createdAt).toLocaleString()}

                </div>
        </div>


        </div>
        </Link>
    </div>
  )
}

