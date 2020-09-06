import React from 'react';
import { ReactSVG } from 'react-svg';


const Card = ({ Img, text }) => {
  console.log(Img)
return (
  <div className="card-circle">
    <div className="card-circle__circle">
      {/* <img src={Img} alt=""/> */}
      <ReactSVG src={Img} className="card-circle__img" />
    </div>
    <p className="card-circle__p">{text}</p>
  </div>
);
}

export default Card;
