import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/articleread.css';


export default function CategoryArticleView() {
  
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        // Fetch the article using the id
        const fetchArticle = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:9090/post/${id}`);
                const data = await response.json();
                console.log(data);
                setArticle(data);
            } catch (error) {
                console.error('Error fetching article:', error);
            }
        };

        fetchArticle();
    }, [id]);

    if (!article) {
        return <div>Loading...</div>;
    }

  return (
    <div id="article-reading-view-main-container">
        <div id="article-title">
            {/* {props.title} */}
            {article.title}

        </div>
        <div id="article-description">
            {/* {props.description} */}
            {article.description}


        </div>

        <div id="metadata-article">
            <p><strong>Category:</strong> {article.category}</p>
            <p><strong>Created At:</strong> {new Date(article.createdAt).toLocaleString()}</p>
        </div>

        
        <div id="article-thumbnail-image-container">
            {/* <img src={props.imageurl} alt={props.title}/> */}
            <img src={article.imageUrl} alt={article.title} />
        </div>

        <div id="article-content">
            {/* {props.content}
             */}
             {article.content}

        </div>
        
        




    </div>
  )
}
