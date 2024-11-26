import React from 'react';

import { useState,useEffect } from 'react';



export default function NewArticleView() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:9090/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);
  return (
    <div>
            {posts.map(post => (
                <div key={post._id} className="post">
                    <h2>{post.title}</h2>
                    <img src={post.imageUrl} alt={post.title} />
                    <p>{post.description}</p>
                    <p>{post.content}</p>
                    <p><strong>Category:</strong> {post.category}</p>
                    <p><strong>Created At date:</strong> {new Date(post.createdAt).toLocaleString()}</p>
                </div>
            ))}
    </div>
  )
}

