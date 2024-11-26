import React from 'react';
import { useEffect, useState } from 'react';

import HomeMainArticle from './HomeMainArticle';
import array1 from '../../sampledata.js/data1';
export default function HomeMain() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:9090/posts');
      const data = await res.json();
      setPosts(data);
      const getCookieValue = () => {
        const cookieName = 'userid'; 
        const cookies = document.cookie.split('; ');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(cookieName + '=')) {
            return cookie.substring(cookieName.length + 1);
          }
        }
        return "14a";
      };
  
      const cookieValue = getCookieValue();
      console.log(cookieValue);
    };
    fetchPosts();
  }, []);
  return (
    <div id="homemain-container">
      {posts.map((post) => (
                <HomeMainArticle key = {post._id} props={post} />
      ))}


      {/* <HomeMainArticle {...array1[0]}/> */}

      {/* <HomeMainArticle {...array1[0]}/> */}



    </div>
  )
}


