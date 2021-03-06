import React from 'react';
import ReactSVG from '../../ReactSVG';
import Card from '../../Card';

// svg
import Icon1 from '../../../assets/home/iconeB.svg';
import Icon2 from '../../../assets/home/iconeE.svg';
import Icon3 from '../../../assets/home/iconeL.svg';
import scheme from '../../../assets/home/schem.svg';

const Scheme = () => (
  <section className="scheme">
    <div className="scheme__wrapper container">
      <h2 className="scheme__title ">A Protocol with Real Products</h2>
      <p className="scheme__desc">
        Emerald Circuit has researched and developed Industrial IoT Products in tandem with
        its own Sidechain on the Ambrosus Network. As a solution to the problem of ‘Garbage-in, Garbage-Out’ that
        plagues traditional blockchain applications, Emerald Circuit offers enterprises, entrepreneurs, and
        consultants the opportunity to license fully secured IoT devices for holistic data management: From End Point
        to Blockchain.
      </p>
      <div className="scheme__block">
        <div className="scheme__list">
          <Card text="Enterprise Friendly Crypto-Economics" img={Icon1} />
          <Card text="Patented IoT Devices" img={Icon2} />
          <Card text="License Our Products For Your Data Needs" img={Icon3} />

        </div>
        <ReactSVG SVG={scheme} classSVG="scheme__img" />
      </div>
    </div>
  </section>
);

export default Scheme;
