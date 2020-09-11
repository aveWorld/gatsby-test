/** Core * */
import React from 'react';

/** Assets * */
import ReactSVG from '../../../components/ReactSVG';

/** SVG * */
import MissionMainSvg from '../../../assets/svg/missions-main-eye.svg';
import OurMissionQuotesSvg from '../../../assets/svg/missions-big-quotes.svg';

const OurMission = () => (
  <>
    <div className="container">
      <div className="our-mission">
        <div className="our-mission_logo">
          <ReactSVG
            SVG={MissionMainSvg}
          />
        </div>
        <div className="our-mission_content">
          <p className="our-mission_content-heading-text">
            <span className="our-mission_content-heading-slash">/</span>
            {' '}
            Our Mission
          </p>
          <p className="our-mission_content-logo-text">
            Emerald Circuit represents the first generation of
            integrated IoT and blockchain solutions. As a protocol and company, Emerald Circuit’s mission is to
            provide secure data from end-point to blockchain for the pioneers of the Fourth Industrial Revolution:
            From Intelligent Agriculture and Manufacturing, to Anti-Counterfeiting, Smart Logistics, and Real-Time
            Product Management.
          </p>
        </div>
      </div>
      <div className="our-mission-fake-container">
        <div className="our-mission-fake-container-item" />
        <div className="our-mission-fake-container-h1">
          <h1 className="our-mission-fake-container-h1-text">IoT Data Security Challenges Threatens Innovation Across Industries:</h1>
        </div>
      </div>
      <div className="our-mission-items">
        <div className="our-mission-items-quotes">
          <ReactSVG
            SVG={OurMissionQuotesSvg}
          />
        </div>
        <div className="our-mission_content">
          <p className="our-mission_content-text">
            Cyberattacks on IOT devices surged 300% in 2019, with
            an estimated 2.9 billion events observed.
          </p>
          <p className="our-mission_content-link">
           Forbes
          </p>
        </div>
      </div>
      <div className="our-mission-items">
        <div className="our-mission-items-quotes">
          <ReactSVG
            SVG={OurMissionQuotesSvg}
          />
        </div>
        <div className="our-mission_content">
          <p className="our-mission_content-text">
            “98 percent of all IoT device traffic is unencrypted”
            while “more than half of IoT devices are vulnerable to medium- or high-severity attacks, making IoT the
            low-hanging fruit for attackers.”
          </p>
          <p className="our-mission_content-link">
            Threat Post
          </p>
        </div>
      </div>
      <div className="our-mission-items">
        <div className="our-mission-items-quotes">
          <ReactSVG
            SVG={OurMissionQuotesSvg}
          />
        </div>
        <div className="our-mission_content">
          <p className="our-mission_content-text">
            IoT vulnerabilities pose legal challenges to companies
            operating under data protection and security regulations (GDPR). As Deloitte explains in their IoT
            Security report, “Thanks to the IoT, data security risks will very likely go beyond embarrassing privacy
            leaks to, potentially, the hacking of important public systems.”
          </p>
          <p className="our-mission_content-link">
            Safeguarding the Internet of Things
          </p>
        </div>
      </div>
      <hr className="hr-grey-line" />
    </div>
  </>
);

export default OurMission;
