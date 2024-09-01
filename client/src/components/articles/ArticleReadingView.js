import React from 'react'

export default function ArticleReadingView() {
  return (
    <div id="article-reading-view-main-container">
        <div id="article-thumbnail-image-container">
            <img src={require('../../assets/il_570xN.5374292412_49r5.avif')}/>
        </div>

        <div id="article-content">

        </div>
        <div id="article-like-dislike-share-buttons-container">

            <div id="like-button-container">
                <button>
                    <img />

                </button>

            </div>
            <div id="dislike-button-container">
                <button>

                </button>

            </div>
            <div id="share-button-container">
                <button>

                </button>

            </div>
        </div>




    </div>
  )
}
