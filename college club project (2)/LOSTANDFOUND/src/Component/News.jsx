import React from 'react';
import './News.css'; // Make sure to create a CSS file for styling

import newsItems from '../News';
const News = () => {
  return (
    <section className="news-section">
      <h2>Latest News</h2>
      <div className="news-items">
        {newsItems.map(item => (
          <article key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;
