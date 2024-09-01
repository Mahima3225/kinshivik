import React from 'react';
import { Route, Routes, Link } from "react-router-dom";



export default function HomeMainArticle(props) {
  return (
    <div className="home-main-article-main-link-container">

    
        <Link className="home-main-article-link" to="/category">

        
        <div className="home-main-article-main-container">
            <div className="home-main-article-header">

                {/* profile picture container */}
                <div className="home-main-article-header-profile-photo-container">
                    <img className="home-main-article-header-profile-photo" src={require('../../assets/il_570xN.5374292412_49r5.avif')}/>
                    {/* <img src={require(`${props.obj.headerdata.profilepicture}`)}/> */}
                </div>

                <div className="home-main-article-header-name-container">
                    {props.headerdata.profilename}


                </div>

            </div>
            <div className="home-main-article-body">
                <div className="home-main-article-thumbnail-image-container">
                    
                    <img className="home-main-article-thumbnail-image" src={require('../../assets/il_570xN.5374292412_49r5.avif')}/>

                </div>
                <div className="home-article-preview-title-container">
                    {props.mainarticlemeta.articletitle}

                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show
                    this is a title i want you to show

                </div>
                <div className="home-main-article-description-container">
                Vladimir Makarov is one of the main antagonists of the Call of Duty franchise, particularly serving as the main antagonist of both the original and rebooted Modern Warfare sub-series'. He is a Russian terrorist and the leader of the Ultranationalist Party, as well as being the founder of the Russian PMC group known as Konni.
                    meaningful text is here i don't know where it will clip it down
                    meaningful text is here i don't know where it will clip it down
                    meaningful text is here i don't know where it will clip it down

                    some extra text
                    

                </div>

            </div>
            

        <div className="article-preview-metadata-container">
                <div className="article-preview-metadata-views">
                    1565 views

                </div>
                <div className="article-preview-metadata-date">
                    23.05.2040

                </div>
        </div>


        </div>
        </Link>
    </div>
  )
}
