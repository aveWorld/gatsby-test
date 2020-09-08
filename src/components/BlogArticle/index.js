import React from 'react';

const BlogArticle = ({ img, title, subtitle, date }) => (
  <div className="blog__article">
    <img src={img} className="blog__article__img" alt="article-preview" />
    <h3 className="blog__article__title">{title}</h3>
    <p className="blog__article__subtitle">{subtitle}</p>
    <p className="blog__article__date">{date}</p>
  </div>
);

export default BlogArticle;
