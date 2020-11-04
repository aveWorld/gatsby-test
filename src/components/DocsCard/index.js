import ReactSVG from '../ReactSVG';
import React from 'react';

const Card = ({ img, text, textLink, file }) => (
  <div className="docs-card">
    <ReactSVG SVG={img} classSVG="docs-card__img" />
      {file?(<p className="card-circle__p-text-link"><a className="card-circle__p-text-link" href={file} download>{textLink}</a></p>) : (<p className="card-circle__p-text">{text}</p>)}
  </div>
);

export default Card;
