// @flow
/** Core * */
import React from 'react';
import { Link } from 'gatsby';

/** Assets * */
import { ReactSVG } from 'react-svg';

/** SVG * */
import HeaderLogo from '../../../assets/svg/header-logo.svg';

/** Components * */
import SideBar from './SideBar';


const Header = (props) => (
  <header className="header">
    <div className="container header-wrapper">
      <Link to="/" className="header-wrapper-logo-link">
        <div className="header-wrapper-logo">
          <ReactSVG
            src={HeaderLogo}
          />
          <p className="header-wrapper-logo-text">Emerald Circuit</p>
        </div>
      </Link>
      <div className="side-bar-block">
        <SideBar
          className="side-bar"
        />
      </div>
      <div className="header-wrapper-flex-container">
        <p className="header-wrapper-navbar-items">
          <Link to="/products" className="header-wrapper-navbar-items-link">
            Products and Services
          </Link>
        </p>
        <p className="header-wrapper-navbar-items">
          <Link to="/mission" className="header-wrapper-navbar-items-link">
            Mission
          </Link>
        </p>
        <p className="header-wrapper-navbar-items">
          <Link to="/sale" className="header-wrapper-navbar-items-link">
            IEO Sale
          </Link>
        </p>
        <p className="header-wrapper-navbar-items">
          <Link to="/docs" className="header-wrapper-navbar-items-link">
            Documentation
          </Link>
        </p>
        <p className="header-wrapper-navbar-items">
          <a href="#" className="header-wrapper-navbar-items-link">Blog</a>
        </p>
      </div>
    </div>
  </header>
);

export default Header;
