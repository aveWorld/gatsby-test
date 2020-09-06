import React from 'react';
import { ReactSVG } from 'react-svg';
import Card from '../../../components/Card';

// svg
import icone1 from '../../../assets/home/iconeB.svg';
import icone2 from '../../../assets/home/iconeE.svg';
import icone3 from '../../../assets/home/iconeL.svg';
import schem from '../../../assets/home/schem.svg';

const Schems = () => (
  <section className="schems">
    <div className="schems__wrapper container">
      <h2 className="schems__title ">A Protocol with Real Products</h2>
      <p className="schems__desc">
        Emerald Circuit has researched and developed Industrial IoT Products in tandem with
        its own Sidechain on the Ambrosus Network. As a solution to the problem of ‘Garbage-in, Garbage-Out’ that
        plagues traditional blockchain applications, Emerald Circuit offers enterprises, entrepreneurs, and
        consultants the opportunity to license fully secured IoT devices for holistic data management: From End Point
        to Blockchain.
      </p>
      <div className="schems__block">
        <div className="schems__list">
          <Card text="Enterprise Friendly Crypto-Economics" img={icone1} />
          <Card text="Patented IoT Devices" img={icone2} />
          <Card text="License Our Products For Your Data Needs" img={icone3} />

        </div>
        <ReactSVG src={schem} className="schems__img" />
      </div>
    </div>
  </section>
);

export default Schems;
