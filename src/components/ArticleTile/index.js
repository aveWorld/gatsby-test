import React from 'react';
import { Link } from 'gatsby';
import ReactSVG from '../ReactSVG'

const ArticleTile = ({ img, title, subtitle, date, url }) => (
  <Link to={`${url}`} className="blog__article">
    <img src={img} className="blog__article__img"/>
    <h3 className="blog__article__title">{title}</h3>
    <p className="blog__article__subtitle">{subtitle}</p>
    <p className="blog__article__date">{date}</p>
  </Link>
);

export default ArticleTile;
