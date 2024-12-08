import React from 'react';
import "../../styles/category.css";
import { useNavigate } from 'react-router-dom';

export default function CategoryHeader() {
  const navigate = useNavigate();
  const handleClick = ()=> {
    navigate('/createcategory');

  }
  return (
    <div id="Category-Header-Main-Container">
        <div>
          Spaces
        </div>

        <div id="Category-Header-create-btn-container">
          <button onClick={handleClick} id="Category-Header-create-btn">Create Space</button>
        </div>
        
    </div>
  )
}
