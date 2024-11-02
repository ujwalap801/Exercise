import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json') 
      .then(response => response.json())
      .then(data => {
        setPosts(data.data.children);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>ReactJS Subreddit Posts</h1>
      <div className="post-grid">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <h2>{post.data.title}</h2>
            <p className="label"><strong>selftext_html:</strong></p>
          

<div className="post-content">
  {post.data.selftext ? (
    <div dangerouslySetInnerHTML={{ __html: post.data.selftext }} />
  ) : (
    <div className="no-content">No content</div>
  )}
</div>

            <p>Score: {post.data.score}</p>
            <a href={post.data.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
