
import * as React from 'react';

import { ReactSVG } from 'react-svg';
import { Link } from 'gatsby';
// svg
import facebookIcone from '../../../assets/sale/face.svg';
import telegIcone from '../../../assets/sale/tel.svg';
import mIcone from '../../../assets/sale/M.svg';
import linkIcone from '../../../assets/sale/lin.svg';
import logo from '../../../assets/sale/logo.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__wrapper container ">
      <div className="footer__left">
        <Link to="/" className="footer__logo">
          <ReactSVG src={logo} />

        </Link>
        <div className="footer__wrap-nav">
          <nav className="footer__nav">
            <Link to="/products" className="footer__item">Products and Services</Link>
            <Link to="/mission" className="footer__item">Mission</Link>
            <Link to="/sale" className="footer__item">IEO Sale</Link>
            <Link to="/docs" className="footer__item">Documentation</Link>
            <a href="#" className="footer__item">Blog</a>
          </nav>
          <div className="footer__copy">
            <span>
              Ambrosus 2017-
              {new Date().getFullYear()}
              , All Rights Reserved
            </span>
          </div>
        </div>
      </div>
      <div className="footer__rigth">
        <div className="footer__social">
          <a href="/" className="footer__social-item"><ReactSVG src={mIcone} className="footer__social-item" /></a>
          <a href="https://t.me/joinchat/AAAAAFBjCKxn6bvwEFpacA" className="footer__social-item">
            <ReactSVG
              src={telegIcone}
              className="footer__social-item"
            />
          </a>
          <a href="/" className="footer__social-item"><ReactSVG src={facebookIcone} className="footer__social-item" /></a>
          <a href="/" className="footer__social-item"><ReactSVG src={linkIcone} className="footer__social-item" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
