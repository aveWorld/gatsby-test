import ReactSVG from '../ReactSVG';
import React from 'react';

const Card = ({ img, text, file }) => (
  <div className="docs-card">
    <ReactSVG SVG={img} classSVG="docs-card__img" />
    <p className="docs-card__p">
      {file? <a href={file} download>{text}</a> : text}
    </p>
  </div>
);

export default Card;
