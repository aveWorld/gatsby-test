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
        <PointsItem img={icone1} title="IoT" subtitle="152,200 IoT devices connected every minute by 2025.” (IDC Data)" />
        <PointsItem img={icone2} title="Market Increase" subtitle="The global IoT security market is expected to grow from $8.2 billion US dollars in 2018, to $35.4 billion US dollars in 2023. With a CAGR of 33.7% during this period. (Marketwatch)"  />
        <PointsItem img={icone3} title="Security" subtitle="By 2021, “Industry analysts predict that spending on IoT endpoint security solutions will be more than $630 million.” (Deloitte)" />
        <PointsItem img={icone4} title="Logistics" subtitle="By 2026, the global connected logistics market size is projected to reach a market capitalization of  USD 82.14 billion. (Global News)" />
      </div>
    </div>
  </section>
);

export default Points;
