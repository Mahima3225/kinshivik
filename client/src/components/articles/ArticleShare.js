import React from 'react';
import { useEffect } from 'react';
import "../../styles/articleshare.css";

function ArticleShare() {

    useEffect(() => { 
        // Create a new link element 
        const link = document.createElement('link');
        // Set the attributes for the link element 
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css';
        link.integrity = "sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw==";
        link.crossOrigin = "anonymous";
        link.referrerpolicy = "no-referrer";
        // Append the link element to the head 
        document.head.appendChild(link);
        // Cleanup function to remove the link when the component unmounts



        const linkarticle = encodeURI(window.location.href);
        const msg = encodeURIComponent('Hey, I found this article on Kinshivik. Read it here,');
        const title = encodeURIComponent('Article or Post Title Here');

        const fb = document.querySelector('.facebook');
        fb.href = `https://www.facebook.com/share.php?u=${linkarticle}`;

        const twitter = document.querySelector('.twitter');
        twitter.href = `http://twitter.com/share?&url=${linkarticle}&text=${msg}&hashtags=javascript,programming`;

        const linkedIn = document.querySelector('.linkedin');
        linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${linkarticle}`;

        const reddit = document.querySelector('.reddit');
        reddit.href = `http://www.reddit.com/submit?url=${linkarticle}&title=${title}`;

        const whatsapp = document.querySelector('.whatsapp');
        whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${linkarticle}`;

        const telegram = document.querySelector('.telegram');
        telegram.href = `https://telegram.me/share/url?url=${linkarticle}&text=${msg}`;




        return () => { 
            document.head.removeChild(link);
        };
    }, []);
  return (
    

    <div id="share-container">
        <h1>Share</h1>
        <div id="share-buttons">

            {/* <!-- facebook --> */}
            <a class="facebook" target="blank"><i class="fab fa-facebook"></i></a>
            
            {/* <!-- twitter --> */}
            <a class="twitter" target="blank"><i class="fab fa-twitter"></i></a>
            
            {/* <!-- linkedin --> */}
            <a class="linkedin" target="blank"><i class="fab fa-linkedin"></i></a>
            
            {/* <!-- reddit --> */}
            <a class="reddit" target="blank"><i class="fab fa-reddit"></i></a>
        
            {/* <!-- whatsapp--> */}
            <a class="whatsapp" target="blank"><i class="fab fa-whatsapp"></i></a>
        
            {/* <!-- telegram--> */}
            <a class="telegram" target="blank"><i class="fab fa-telegram"></i></a>
        
        </div>
    </div>
  )
}

export default ArticleShare;