import React from 'react';
// import "../../styles/articleread.css";

function IndividualCategoryInput({category, props23}) {

    const handleChange = (event) => {
        props23.setCategoryId(event.target.value);


    }
  return (
    <div className='individual-category-input-main-container'>
        <div className='individual-category-radio-input-container'>
            <input className='individual-category-radio-input' name="category" type="radio" value={category.categoryId} onChange={handleChange}/>

        </div>
        <div className='individual-category-input-category-image-container'>
            <img className="individual-category-input-category-image" src={`${category.image}`}/>
        </div>
        
        
        
    
        <div className='individual-category-input-category-title'>{category.title}</div>

            
        
       
    </div>

        
  )
}

export default IndividualCategoryInput;