import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function IndividualCategory({ category }) {

    const navigate = useNavigate();

    // const { categoryid } = useParams();

    const handleclick = ()=>{
        navigate(`/category/${category.categoryId}/posts`);

    }
  return (
    <div className='individual-category-main-container'>
        <div className="individual-category-header">
            <div className="individual-category-header-image-container">
                {/* <img className="individual-category-header-image" src={require('../../assets/il_570xN.5374292412_49r5.avif')}/> */}

                <img className="individual-category-header-image" src={`${category.image}`}/>
            </div>
            <div className="individual-category-header-name-container">
                {category.title}

            </div>
        </div>
        <div  className="individual-category-description-container">
        {/* Vladimir Makarov was born before the fall of the Soviet Union in the suburbs of Moscow. As the son of a high-ranking politician within the Russian government, Makarov watched the Soviet Union crumble, taking his father with it. The bright eyed, intelligent boy woke up one morning to his father's hanging body. Makarov came to despise his father's weakness, as well as the failures of the Soviet Union which had brought it about. He vowed not to make the same mistakes and so began his lifelong obsession. In 1998, Makarov joined the Russian military at the age of 18. A natural soldier with a talent for strategy, his reputation turned sour when he joined forces with an unsanctioned rogue army to maintain control of Urzikstan. When the Urzikstan Liberation Force rose and took back their home, Makarov experienced his first failure. */}
        {category.description}

        </div>
        <div className="individual-category-visit-button-container">
            <button className='individual-category-visit-button' onClick={handleclick} >Visit</button>

        </div>

    </div>
  )
}
