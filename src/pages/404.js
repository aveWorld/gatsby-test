import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'

const NotFound = () => (
  <Layout>
    <section className="not-found">
        <div className="not-found__wrapper container ">
        <p className="not-found__sentence">Oops, something happened , this page is missing!</p>
        <p className="not-found__error">404</p>
        <Link to="/" className="not-found__btn">
            <span>
            Back to Home Page
            </span>
        </Link>
        </div>
    </section>
  </Layout>
);

export default NotFound;