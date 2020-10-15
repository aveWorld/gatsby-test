// @flow
import * as React from 'react';
import docsImg from '../../assets/svg/docsImg.svg';
import DocsCard from '../../components/DocsCard';
import Layout from '../../components/Layout';

//PDF
import Cryptonomics from '../../pdf/EC_Cryptonomics.pdf';
import DevSolutions1 from '../../pdf/Smart Logistics Solutions.pdf';
import DevSolutions2 from '../../pdf/Organ Transplant Solutions.pdf';
import DevSolutions3 from '../../pdf/Artifact Preservation.pdf';
import DevSolutions4 from '../../pdf/Luxury Management.pdf';
import WhitePaper from '../../pdf/EmeraldCircuitWP.pdf';
import Tokenomics from '../../pdf/EC Tokenomics2.pdf';

const Docs = () => (
  <Layout>
    <div className="container layout docs-layout">
      <h1 className="docs__h1">
        {' '}
        <span className="docs__h1__span">/</span> Start Here To Learn About The
        Future of IoT
      </h1>
      <div className="docs__cards">
        <DocsCard
          text="Emerald Circuit Whitepaper"
          img={docsImg}
          file={WhitePaper}
        />
        <DocsCard
          text="Emerald Circuit Crypto-Economics Paper"
          img={docsImg}
          file={Cryptonomics}
        />
        <DocsCard text="Team Roadmap" img={docsImg} />
        <DocsCard
          text="Emerald Circuit Tokenomics"
          img={docsImg}
          file={Tokenomics}
        />
      </div>
      <h2 className="docs__h2">Product Specifications:</h2>
      <div className="docs__cards">
        <DocsCard text="The Smart Flask" img={docsImg} />
        <DocsCard text="The Smart Container" img={docsImg} />
        <DocsCard text="The Smart Pallet" img={docsImg} />
      </div>
      <h2>Business Solutions:</h2>
      <div className="docs__cards">
        <DocsCard
          text="Smart Logistics Solutions"
          img={docsImg}
          file={DevSolutions1}
        />
        <DocsCard
          text="Organ Transplant Solutions"
          img={docsImg}
          file={DevSolutions2}
        />
        <DocsCard
          text="Artifact Preservation and
          Monitoring Solutions"
          img={docsImg}
          file={DevSolutions3}
        />
        <DocsCard text="Luxury Management" img={docsImg} file={DevSolutions4} />
      </div>
    </div>
  </Layout>
);

export default Docs;
