// @flow
import * as React from 'react';

import ReactSVG from '../../ReactSVG';

// svg
import WhySvg from '../../../assets/sale/circle.svg';

const WhySection = () => (
  <section className="why">

    <div className="why__wrapper container">
      <ReactSVG SVG={WhySvg} classSVG="why__bg-img" />
      <div className="why__desc">
        <h2 className="intro__title intro__title_why">
          <span>/</span>
          {' '}
          Why IEO?
        </h2>
        <p>
          Unlike many other IEOs, Emerald Circuit has already developed the core products grounding the business
          model of the project.
        </p>
        <p>
          The Intelligent Objects across the micro (individual product) - macro (holder for multiple products) -
          and networked (interfacing between products) levels are all developed prototypes with patents, available
          for deployment and Proof of Concept testing. Meanwhile, an initial version of the Emerald Circuit
          sidechain built on the Ambrosus Network has already launched.
        </p>
        <p>
          The development of the Emerald Circuit project is more closely aligned with building out a complete team
          of business, marketing, and industry experts to effectively market and scale the existing technology
          available.
        </p>
      </div>
    </div>
  </section>
);
export default WhySection;
