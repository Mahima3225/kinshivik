import React from 'react';
import closeicon from"../../assets/cross-svgrepo-com.svg";
import '../../styles/articleread.css';
import IndividualCategoryInput from './IndividualCategoryInput';

function ArticleForward(props) {

    const [categoriesOptions,setCategoriesOptions] = React.useState([]);
    React.useEffect(() => {
        const fetchCategories = async () => {
          const res = await fetch(`http://localhost:9090/categories`);
          const data = await res.json();
          setCategoriesOptions(data);
          console.log(data);
        };
        fetchCategories();
    }, []);


    const [categoryId, setCategoryId] = React.useState("");
    const props23 = {
        setCategoryId : setCategoryId,

    }
    
    const submit = (event) =>{

        event.preventDefault();
        
        props.setSelectedCategory(categoryId);
    }

    
  return (
    <div id="article-forward-main-conatiner">
        <div id="article-forward-main-conatiner-header">
            <div id="article-forward-heading">
                Share to Space
            </div>
            <div id="article-forward-close-btn-container">
                <button id="article-forward-close-btn" onClick={props.toggleForwardModal}>
                    <img id="article-forward-modal-close-svg" src={closeicon}/>
                </button>
            </div>

        </div>
        <div id="article-forward-form-container"> 
          <form id="article-forward-form" onSubmit={submit}>
            <div id="article-forward-main-conatiner-body">
                {categoriesOptions === null && <h1>Loading...</h1>}
                {categoriesOptions.map((category) => (
                <IndividualCategoryInput key = {category._id} category={category} props23={props23} />
                ))}
            </div>
        
            <div id="article-forward-main-conatiner-footer">
                
                <div>
                    <input id="article-forward-submit-input" type='submit' value={"Share"}/>
                </div>
    
            </div>

          </form>
        </div>
        
        
    </div>
  )
}

export default ArticleForward;