import React from 'react';
import ReactSVG from '../../components/ReactSVG';


const Card = ({ img, text }) => {
  return (
  <div className="card-circle">
    <div className="card-circle__circle">
      <ReactSVG SVG={img} classSVG="card-circle__img" />
    </div>
    <p className="card-circle__p">{text}</p>
  </div>
  );
}

export default Card;
