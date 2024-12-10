import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/categorysidesec.css";


function CategorySideSection() {
  const { id } = useParams();

  const [categoryDetails, setCategoryDetails] = useState({});
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(`http://localhost:9090/category/${id}/about`);
      const data = await res.json();
      setCategoryDetails(data);
      console.log(data);
    };
    fetchCategory();
  }, []);
  return (
    <div id="category-side-section-details-part-main-container">
        <div id="category-side-section-details-header">
          <div  id="category-side-section-details-image-container">
            <img  id="category-side-section-details-image" src = {categoryDetails.imageUrl}/>
          </div>
        </div>
        
        <div id="category-side-section-details-title">Space/{categoryDetails.title}</div>
        <div  id="category-side-section-details-description">
          {categoryDetails.description}
          


        </div>


    </div>
  )
}

export default CategorySideSection;