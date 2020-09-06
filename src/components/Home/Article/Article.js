import React from 'react';
/** Core * */
import { Link } from 'gatsby';
import { ReactSVG } from 'react-svg';
// svg
// import Image from '../../../assets/home/medium.svg';
// import title from '../../../assets/home/titleM.svg';
// import icone from '../../../assets/home/shapeM.svg';
import arrow from '../../../assets/home/arrow-left.svg';

const Article = () => (
  <article className="article">
    <div className="article__wrapper container">
      {/* <div className="article__img-block"> */}
      {/*  <ReactSVG src={title} className="article__img-med" /> */}

      {/*  <ReactSVG src={Image} className="article__img" /> */}
      {/* </div> */}
      <div className="article__pannel">
        <h2 className="article__title">Blog</h2>
        <Link to="/docs">
          Watch all articles
        </Link>
      </div>
      <div className="article__gallery">
        <ReactSVG src={arrow} className="article__arrow  article__arrow_left" />
        <ReactSVG src={arrow} className="article__arrow article__arrow_rigth " />
        <div className="article____gallery-list" />

      </div>
    </div>
  </article>

);
export default Article;
