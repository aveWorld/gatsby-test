import ReactSVG from '../ReactSVG';
import React from 'react';

const Card = ({ img, text }) => (
  <div className="docs-card">
    <ReactSVG SVG={img} classSVG="docs-card__img" />
    <p className="docs-card__p">{text}</p>
  </div>
);

export default Card;
