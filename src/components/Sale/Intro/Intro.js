// @flow
import * as React from 'react';
import { ReactSVG } from 'react-svg';

// svg
import inroSvg from '../../../assets/sale/mainSale.svg';

// componets

import RegButton from '../../../components/Layout/RegButton';

const Intro = () => (
  <section className="intro">

    <div className="intro__wrapper container">

      <div className="intro__desc">
        <ReactSVG src={inroSvg} className="intro__bg-img" />

        <h1 className="intro__title">
          <span>/</span>
          {' '}
          IEO Sale
        </h1>
        <p className="intro__text">
          The Emerald Circuit IEO Sale is Coming Soon in partnership with Huobi Prime!
          The EMR Token is a Proof of Stake utility token used for securing the Emerald Circuit Sidechain.
        </p>
      </div>
      <div className="intro__dashboard">
        <div className="intro__total">
          A total of 7 Million EMR’s will be offered in the Initial Exchange Offering:
        </div>
        <div className="intro__list">
          <div className="intro__item">
            <span className="intro__type">Token Name</span>
            <div className="intro__calling"><span>Emerald Token</span></div>
            <span className="intro__sup">/EMR/</span>
          </div>
          <div className="intro__item">
            <span className="intro__type">Token Price</span>
            <div className="intro__calling"><span>$1.00 USD Coin</span></div>
            <span className="intro__sup">Paxos Standard</span>
          </div>
          <div className="intro__item">
            <span className="intro__type">pre-Sale</span>
            <div className="intro__calling">
              <span> 2 million EMRs at</span>
              <span>20% discount</span>
              <span>$1,600,000 Soft Cap</span>
            </div>

          </div>
          <div className="intro__item">
            <span className="intro__type">Main Sale</span>
            <div className="intro__calling">
              <span>  5 million EMRs at</span>
              <span> 10% discount</span>
              <span> $4,500,000 Main Sale</span>
            </div>

          </div>
          <div className="intro__item">
            <span className="intro__type"> Hard Cap</span>
            <div className="intro__calling">
              <span>7 million EMR for total </span>
              <span>valuation of $6,100,000  </span>
              <span>US Dollars Hard Cap </span>
            </div>

          </div>
        </div>
        <div className="intro__register">
          <RegButton text="register" />
          <p className="intro__register-sentence">For The Emerald Circuit IEO</p>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
