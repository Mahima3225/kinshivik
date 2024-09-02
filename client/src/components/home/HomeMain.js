import React from 'react';
import { useEffect, useState } from 'react';
import HomeMainArticle from './HomeMainArticle';
import array1 from '../../sampledata.js/data1';
export default function HomeMain() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div id="homemain-container">
      {posts.map((post) => (
                <HomeMainArticle key={post._id} post={post} />
      ))}


      <HomeMainArticle {...array1[0]}/>

      <HomeMainArticle {...array1[0]}/>



    </div>
  )
}
