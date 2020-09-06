// @flow
import * as React from 'react';

import { ReactSVG } from 'react-svg';

// svg
import icone1 from '../../../assets/home/icone1.svg';
import icone2 from '../../../assets/home/icone2.svg';
import icone3 from '../../../assets/home/icone3.svg';
import leftImg from '../../../assets/home/leftImg.svg';
import rightImg from '../../../assets/home/rigthImg.svg';
// componets
import RegButton from '../../../components/Layout/RegButton';
import Card from '../../../components/Card';

const Secure = () => (
  <section className="secure">
    <ReactSVG src={leftImg} className="secure__bg-img secure__bg-img_left" />
    <ReactSVG src={rightImg} className="secure__bg-img secure__bg-img_rigth" />

    <div className="secure__wrapper container ">
      <h1 className="secure__title">
        Secure Data From Endpoint to Blockchain
      </h1>
      <p className="secure__sup">
        Emerald Circuit Offers End-To-End Data Security Through Proprietary Intelligent
        Objects and the Ambrosus Blockchain Ecosystem
      </p>
      <div className="secure__wrap-btn">
        <RegButton text="register" />
      </div>
      <div className="secure__desc">
        <span> As the Industrial Internet of Things matures, cybersecurity concerns plague traditional IoT devices. With</span>
        <span> 128-bit encryption built into Emerald Circuit products, data can be reliably sourced from diverse environments</span>
        <span> using intelligent products, containers, and pallets in a fully integrated and secure manner</span>
      </div>

      <div className="secure__list">
        <Card text="More About Our Products" img={icone1} />
        <Card text="Read Up On Emerald Circuit Documentation" img={icone2} />
        <Card text="License Our Products For Your Data Needs" img={icone3} />
      </div>
    </div>

  </section>
);

export default Secure;
