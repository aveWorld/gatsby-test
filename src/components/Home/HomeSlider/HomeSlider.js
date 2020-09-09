import React from 'react';
/** Core * */
import { Link } from 'gatsby';
import ReactSVG from '../../ReactSVG';
import Slider from 'react-slick';
// component
import ArticleTile from '../../ArticleTile';
// svg
import Image from '../../../assets/home/medium.svg';
import arrow from '../../../assets/home/arrow-left.svg';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <ReactSVG SVG={arrow} classSVG="home-slider__arrow home-slider__arrow_rigth " onClick={onClick} />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <ReactSVG SVG={arrow} classSVG="home-slider__arrow home-slider__arrow_left" onClick={onClick} />
  );
}



const HomeSlider = ({ articles }) => {
  function amountSlide() {
    return articles.length >= 3 ? 3 : (articles.length === 2 ? 2 : 1);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: amountSlide(),
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: articles.length >= 2 ? 2 : 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }],
  };
  return (
    <article className="home-slider">
      <ReactSVG SVG={Image} classSVG="home-slider__img" />
      <div className="home-slider__wrapper container">
        <div className="home-slider__pannel">
          <h2 className="home-slider__title">Blog</h2>
          <Link className="home-slider__show" to="/blog">
            Watch all articles
          </Link>
        </div>
        <div className="home-slider__gallery">
          <Slider {...settings} className="home-slider__gallery-list">
          {
            articles.map((post, el) => {
              const { title, author, date, description, path, image } = post.node.frontmatter;
              return (
                <ArticleTile 
                url={path} 
                img={image.publicURL} 
                key={el} 
                title={title} 
                subtitle={description} 
                date={date} 
                />
              )
              }
            )
          }
          </Slider>
        </div>
      </div>
    </article>
  );
};
export default HomeSlider;
