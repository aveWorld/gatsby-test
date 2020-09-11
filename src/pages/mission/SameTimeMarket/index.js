/** Core * */
import React from 'react';

/** Assets * */
import ReactSVG from '../../../components/ReactSVG';

/** SVG * */
import MissionsBigLogo from '../../../assets/svg/missions-big-logo.svg';

const SameTimeMarket = () => (
  <div className="same-time-market">
    <div className="container">
      <h3 className="same-time-market_h3"> At the Same Time The IoT Market Is Growing Exponentially:</h3>
      <div className="same-time-market__items">
        <div className="same-time-market__items-col">
          <div className="same-time-market__items-item">
            <p className="same-time-market__items-item-text">“152,200 IoT devices connectedevery minute by 2025.”</p>
            <p className="our-mission_content-link">
              IDC Data
            </p>
          </div>
          <div className="same-time-market__items-item">
            <p className="same-time-market__items-item-text">
              The global IoT security market is expected to grow from
              $8.2 billion US dollars in 2018, to $35.4
              billion US dollars in 2023. With a CAGR of 33.7% during this period.
            </p>
            <p className="our-mission_content-link">
              Deloitte
            </p>
          </div>
        </div>
        <div className="same-time-market__items-col indent-from-top">
          <div className="same-time-market__items-item">
            <p className="same-time-market__items-item-text">
              By 2021, “Industry analysts predict that spending on IoT
              endpoint security solutions will be more than
              $630 million.”
            </p>
            <p className="our-mission_content-link">
              Marketwatch
            </p>
          </div>
          <div className="same-time-market__items-item">
            <p className="same-time-market__items-item-text">
              By 2026, the global connected logistics market size is
              projected to reach a market capitalization of
              USD 82.14 billion.
              {' '}
            </p>
            <p className="our-mission_content-link">
              Global News
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="darkblue-block">
      <div className="darkblue-block-flex-container container">
        <div className="darkblue-block-logo">
          <ReactSVG
            SVG={MissionsBigLogo}
          />
        </div>
        <div className="darkblue-block-content">
          <p className="darkblue-block-content-text">
            Emerald Circuit Is Positioned To Become a Global Pioneer and
            Leader of End-to-End IoT Device. Security: From Sensor Endpoint To Blockchain.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SameTimeMarket;
