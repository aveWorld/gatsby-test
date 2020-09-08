import React from 'react';
import PointsItem from '../../PointsItem';

// svg
import icone1 from '../../../assets/home/cloud.svg';
import icone2 from '../../../assets/home/range.svg';
import icone3 from '../../../assets/home/smart.svg';
import icone4 from '../../../assets/home/world.svg';

const Points = () => (
  <section className="points">
    <div className="points__wrapper container">
      <div className="points__list">
        <PointsItem img={icone1} title="IoT" amount="152,000" />
        <PointsItem img={icone2} title="Market Increase" subtitle="Billion" amount="$35,4" />
        <PointsItem img={icone3} title="Security" subtitle="Million" amount="$630" />
        <PointsItem img={icone4} title="Logistics" subtitle="Million " amount="$630" />
      </div>
    </div>
  </section>
);

export default Points;
