// @flow
import * as React from 'react';
import {Link} from 'gatsby';

import ReactSVG from '../../ReactSVG';

// svg
import icon1 from '../../../assets/home/icone1.svg';
import icon2 from '../../../assets/home/icone2.svg';
import icon3 from '../../../assets/home/icone3.svg';
import leftImg from '../../../assets/home/leftImg.svg';
import rightImg from '../../../assets/home/rigthImg.svg';

// componets
import Card from '../../Card';

const Secure = () => (
  <section className="secure">
    <ReactSVG SVG={leftImg} classSVG="secure__bg-img secure__bg-img_left"/>
    <ReactSVG SVG={rightImg} classSVG="secure__bg-img secure__bg-img_rigth"/>

    <div className="secure__wrapper container ">
      <h1 className="secure__title">
        Secure Data From Endpoint to Blockchain
      </h1>
      <p className="secure__sup">
        Emerald Circuit Offers End-To-End Data Security Through Proprietary Intelligent
        Objects and the Ambrosus Blockchain Ecosystem
      </p>
      <div className="secure__wrap-btn">
        <button className="intro__btn">
          <span>register</span>
        </button>
      </div>
      <div className="secure__desc">
        <span> As the Industrial Internet of Things matures, cybersecurity concerns plague traditional IoT devices. With</span>
        <span> 128-bit encryption built into Emerald Circuit products, data can be reliably sourced from diverse environments</span>
        <span> using intelligent products, containers, and pallets in a fully integrated and secure manner</span>
      </div>

      <div className="secure__list">
        <Link to="/products/">
          <Card textLink="More About Our Products" img={icon1}/>
        </Link>
        <Link to="/docs/">
          <Card textLink="Read Up On Emerald Circuit Documentation" img={icon2}/>
        </Link>
        <Card text="License Our Products For Your Data Needs" img={icon3}/>
      </div>
    </div>
  </section>
);

export default Secure;
