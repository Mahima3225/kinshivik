

import React from 'react';
import { useEffect, useState } from 'react';
import CategoryArticlePreview from './CategoryArticlePreview';
import { useParams } from 'react-router-dom';
import "../../styles/categoryarticles.css";
import CategoryAdvertisementContainer from './CategoryAdvertisementContainer';
import CategorySideSection from './CategorySideSection';

// import array1 from '../../sampledata.js/data1';
// export default function CategoryArticles({props}) {
    export default function CategoryArticles() {

    const { id } = useParams();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`http://localhost:9090/category/${id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div id="category-main-container">
      
      {posts.map((post) => (
                <CategoryArticlePreview key = {post._id} props={post} />
      ))}


      {/* <HomeMainArticle {...array1[0]}/> */}

      {/* <HomeMainArticle {...array1[0]}/> */}


      <CategorySideSection/>


      <CategoryAdvertisementContainer/>





    </div>
  )
}

