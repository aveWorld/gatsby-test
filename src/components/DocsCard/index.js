import { ReactSVG } from 'react-svg';
import React from 'react';

const Card = ({ img, text }) => (
  <div className="docs-card">
    <ReactSVG src={img} className="docs-card__img" />
    <p className="docs-card__p">{text}</p>
  </div>
);

export default Card;
