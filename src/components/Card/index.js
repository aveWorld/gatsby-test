import React from 'react';
import ReactSVG from '../../components/ReactSVG';


const Card = ({ img, textLink, text }) => {
  return (
  <div className="card-circle">
    <div className="card-circle__circle">
      <ReactSVG SVG={img} classSVG="card-circle__img" />
    </div>
    <p className="card-circle__p-text">{text}</p>
    <p className="card-circle__p-text-link">{textLink}</p>
  </div>
  );
}

export default Card;
