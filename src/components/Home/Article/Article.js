import React from 'react';

import  ReactSVG  from '../../ReactSVG';
// svg
import Image from '../../../assets/home/medium.svg';
import title from '../../../assets/home/titleM.svg';
import icone from '../../../assets/home/shapeM.svg';

const Article = () => (
  <article className="article">
    <div className="article__wrapper container">
      <div className="article__img-block">
        <ReactSVG SVG={title} classSVG="article__img-med" />
        <ReactSVG SVG={Image} classSVG="article__img" />
      </div>
      <div className="article__text-block">
        <h3 className="article__sup">Updates and Integration: Bringing IoT and Blockchain To Market</h3>
        <div className="article__text">
          Emerald Circuit has researched and developed Industrial IoT Products in tandem
          with its own Sidechain on the Ambrosus Network.
        </div>
        <div className="article__date">
          <ReactSVG SVG={icone} classSVG="article__icone" />
          <span>12 September, 2020 </span>
        </div>
      </div>
    </div>
  </article>

);
export default Article;
