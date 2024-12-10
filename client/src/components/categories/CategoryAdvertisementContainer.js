import React from 'react';
import "../../styles/categorysidesec.css";
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function CategoryAdvertisementContainer() {
  const [ad, setAd] = useState({});
  const { id } = useParams();

    useEffect(() => {
        const fetchAd = async () => {
            try {
                const response = await fetch(`http://localhost:9090/category/${id}/ad`);
                const data = await response.json();
                setAd(data);
            } catch (error) {
                console.error('Error fetching Ad:', error);
            }
        };

        fetchAd();
    }, []);
  return (
    <div id="category-side-section-ad-part">

      <div id="category-side-section-ad-title-part">
        <button id="category-side-section-ad-promoted-tag">Ad</button>
        {ad.title}
      </div>

      <div id="category-side-section-ad-image-container-part">
        <img id="category-side-section-ad-image-part" src={ad.imageUrl}/>


      </div>

      
      <div id="category-side-section-ad-btn-link-container-part">
        <a target='_blank' id="category-side-section-ad-btn-link-part" href={ad.url}>
          <button id="category-side-section-ad-btn-part">Visit</button>
        </a>

      </div>
      
      
      
    </div>
  )
}

export default CategoryAdvertisementContainer;