import React from 'react';
import IndividualCategory from './IndividualCategory';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CategoryMainView() {


  


  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(`http://localhost:9090/categories`);
      const data = await res.json();
      setCategories(data);
      console.log(data);
    };
    fetchCategories();
  }, []);
  


  return (
    <div id="category-main-view-container">
      {/* <IndividualCategory/>
      <IndividualCategory/>
      <IndividualCategory/>
      <IndividualCategory/>
      <IndividualCategory/> */}

      {categories.map((category) => (
                <IndividualCategory key = {category._id} category={category} />
      ))}
        

        


    
    
    </div>
  )
}
