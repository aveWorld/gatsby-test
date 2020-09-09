import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Helmet from 'react-helmet'
import favicon from '../../exclude/favicon.ico'

const Layout = (props) => (
  <div className="layout">
    <Helmet>
      <meta charset="utf-8" />
      <link rel="icon" href={favicon} />
      <title>Emerald Circuit</title>
      <meta name="description" content="Emerald Circuit" />
    </Helmet>
    <Header />
    <main className="page">
      {props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;
