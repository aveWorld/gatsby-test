import React from 'react';
import ReactSVG from '../ReactSVG';

const PointsItem = ({ img, amount, title, subtitle }) => (
  <div className="points__item">
    <h4 className="points__calling">{title}</h4>
    <ReactSVG SVG={img} classSVG="points__img" />
    <span className="points__amount">{amount}</span>
    {subtitle ? <span className="points__subtitle">{subtitle}</span> : null}
  </div>
);

export default PointsItem;
