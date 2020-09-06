// @flow
import * as React from 'react';
import docsImg from '../../assets/svg/docsImg.svg';
import DocsCard from '../../components/DocsCard';
import Layout from '../../components/Layout'

const Docs = () => (
  <Layout>
    <div className="container layout docs-layout">
      <h1 className="docs__h1">
        {' '}
        <span className="docs__h1__span">/</span>
        {' '}
        Start Here To Learn About The Future of IoT
      </h1>
      <div className="docs__cards">
        <DocsCard text="Emerald Circuit Whitepaper" img={docsImg} />
        <DocsCard text="Emerald Circuit Crypto-Economics Paper" img={docsImg} />
        <DocsCard text="Team Roadmap" img={docsImg} />
      </div>
      <h2 className="docs__h2">Product Specifications:</h2>
      <div className="docs__cards">
        <DocsCard text="The Smart Flask" img={docsImg} />
        <DocsCard text="The Smart Container" img={docsImg} />
        <DocsCard text="The Smart Pallet" img={docsImg} />
      </div>
    </div>
  </Layout>
);

export default Docs;
