import React from 'react';
import { Link } from 'gatsby';
import BlogArticle from '../BlogArticle';
import articles from '../../articles';

const MapArticles = () => (
  articles.map((article) => {
    const { image, title, subtitle, date, id, url } = article;
    return (
      <Link to={`/blog/${url}/`}>
        <BlogArticle
          img={image}
          title={title}
          subtitle={subtitle}
          date={date}
          key={id}
        />
      </Link>
    );
  })
);

export default MapArticles;
