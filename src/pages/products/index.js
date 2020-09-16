
import * as React from 'react';
import ReactSVG from '../../components/ReactSVG'
import Sec1Img from '../../assets/svg/pages-sec1_1.svg'
import Sec1Img1 from '../../assets/svg/pages-sec1_2.svg'
import Сircle1 from '../../assets/svg/circle1.svg'
import Сircle2 from '../../assets/svg/circle2.svg'
import Сircle3 from '../../assets/svg/circle3.svg'
import sec2Img from '../../exclude/products_sec2.svg'
import Card from '../../components/Card'
import Layout from '../../components/Layout'


const Products = (props) => {
  return (
    <Layout>
      <div className="first-sec">
            <div className="container layout first-sec__layout">
              <div className="first-sec__build-for">
                  <div className="build-for__text">
                      <h1 className="build-for__text__h1"><span className="build-for__text__h1__span">/</span> Built For Data Security Standards of Tomorrow</h1>
                      <p>Emerald Circuit’s Core Product Selection Is Grounded In the Belief That IoT Data Must Be Secure Above All Else.</p>
                      <p className="text-padding">The Emerald Circuit Solution Stack Includes Secure IoT Devices Made For Individual Products, Containers of Products, and Entire Pallets of Products.</p>
                  </div>
                  <ReactSVG 
                    classSVG="first-sec__img"
                    SVG={Sec1Img}
                  />
              </div>
              <div className="first-sec__cards">
                  <Card text={'The Smart Flask'} img={Сircle1} />
                  <Card text={'The Smart Container'} img={Сircle2} />
                  <Card text={'The Smart Pallet'} img={Сircle3} />
              </div>
              <div className="first-sec__circuit-pallet">
                  <ReactSVG 
                    classSVG="first-sec__img"
                    SVG={Sec1Img1}
                  />
                  <div className="circuit-pallet__text">
                      <h2 className="circuit-pallet__h2">The Future of Data Management Is Here: Introducing the Emerald Circuit Pallet Network</h2>
                      <p className="text-padding">Integrate All Of Your Intelligent Objects Into A Single Network On The Edge:
                          Allow Your Products to Collect Data And Seamlessly Communicate With One Another, Before Only Sending the Most Essential Data to the Cloud and onto the blockchain.</p>
                  </div>
              </div>
            </div>
        </div>
        <div className="second-sec">
          <div className="container layout">
            <div className="second-sec__howItWorks">
              <h3 className="second-sec__h3">How It Works</h3>
              <p className="second-sec__p">The Emerald Circuit Pallet Network Connects Individual Products With Intelligent Containers, to Edge-Gateways Embedded into Product Pallets.
                Devices are able to communicate with one another in real-time.
                Data Processing on the Pallet itself ensures that only high quality data is securely transmitted to the cloud and eventually the Blockchain.</p>
            </div>
            <div className="second-sec__circuitSidechain">
              <h3  className="second-sec__h3">The Emerald Circuit Sidechain</h3>
              <p className="second-sec__p">The Emerald Circuit Sidechain is an independent protocol operating on the Ambrosus Blockchain.
                Utilized with the EMR Token, Data is sent from sensor, to sidechain and then onwards to the Ambrosus blockchain.</p>
            </div>
            <img src={sec2Img} className="second-sec__img" alt=""/>
          </div>
        </div>
    </Layout>
  );
};

export default Products;
