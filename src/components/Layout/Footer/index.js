
import * as React from 'react';

import ReactSVG from '../../ReactSVG';
import { Link } from 'gatsby';
// svg
import FacebookIcone from '../../../assets/sale/face.svg';
import TelegIcone from '../../../assets/sale/tel.svg';
import MIcone from '../../../assets/sale/M.svg';
import LinkIcone from '../../../assets/sale/lin.svg';
import Logo from '../../../assets/sale/logo.svg';

const Footer = () => {
return (
  <footer className="footer">
    <div className="footer__wrapper container ">
      <div className="footer__left">
        <Link to="/" className="footer__logo">
          <ReactSVG SVG={Logo}/>

        </Link>
        <div className="footer__wrap-nav">
          <nav className="footer__nav">
            <Link to="/products/" className="footer__item">Products and Services</Link>
            <Link to="/mission/" className="footer__item">Mission</Link>
            <Link to="/sale/" className="footer__item">IEO Sale</Link>
            <Link to="/docs/" className="footer__item">Documentation</Link>
            <Link to="/blog/" className="footer__item">Blog</Link>
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
          <a href="/" className="footer__social-item" aria-label="Medium Icon"><ReactSVG SVG={MIcone} classSVG="footer__social-item" /></a>
          <a href="https://t.me/joinchat/AAAAAFBjCKxn6bvwEFpacA" className="footer__social-item">
            <ReactSVG
              classSVG="footer__social-item"
              SVG={TelegIcone}
            />
          </a>
          <a href="/" className="footer__social-item" aria-label="Facebook Icon"><ReactSVG classSVG="footer__social-item" SVG={FacebookIcone}/></a>
          <a href="/" className="footer__social-item" aria-label="LinkedIn Icon"><ReactSVG classSVG="footer__social-item" SVG={LinkIcone}/></a>
        </div>
      </div>
    </div>
  </footer>
);
}

export default Footer;
