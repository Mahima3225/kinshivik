import React from 'react';


export default function HomeMainArticle(props) {
  return (
    <div>
        <div id="home-main-article-header">

            {/* profile picture container */}
            <div>
                {/* <img src={require(`${props.obj.headerdata.profilepicture}`)}/> */}
            </div>

            <div>
                {props.obj.headerdata.profilename}


            </div>

        </div>
        <div id="home-main-arcticle-body">
            <div>
                {props.obj.mainarticlemeta.articletitle}

            </div>

        </div>


    </div>
  )
}
