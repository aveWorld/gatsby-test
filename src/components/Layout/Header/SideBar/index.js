/** Core * */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

/** Assets * */

import { slide as Menu } from 'react-burger-menu';

const SideBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const closeMenu = () => setMenuIsOpen(false);

  useEffect(() => {
    menuIsOpen ? document.body.parentElement.className = 'hideScroll' : document.body.parentElement.className = '';
    menuIsOpen ? document.body.className = 'hideScroll' : document.body.className = '';
  }, [menuIsOpen]);

  const handleStateChange = (state) => {
    setMenuIsOpen(state.isOpen);
  };

  return (
    <>
      <Menu
        className="header__side-menu"
        right
        customCrossIcon={<div className="close-menu">X</div>}
        isOpen={menuIsOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <main>
          {/* eslint-disable */}
          <p className="header-wrapper-navbar-items" onClick={closeMenu}>
            <Link to="/products/" className="header-wrapper-navbar-items-link">
              Products and Services
            </Link>
          </p>
          <p className="header-wrapper-navbar-items" onClick={closeMenu}>
            <Link to="/mission/" className="header-wrapper-navbar-items-link">
              Mission
            </Link>
          </p>
          <p className="header-wrapper-navbar-items" onClick={closeMenu}>
            <Link to="/sale/" className="header-wrapper-navbar-items-link">
              IEO Sale
            </Link>
          </p>
          <p className="header-wrapper-navbar-items" onClick={closeMenu}>
            <Link to="/docs/" className="header-wrapper-navbar-items-link">
              Documentation
            </Link>
          </p>
          <p className="header-wrapper-navbar-items" onClick={closeMenu}>
            <Link to="/blog/" className="header-wrapper-navbar-items-link">
              Blog
            </Link>
          </p>
        </main>
      </Menu>
    </>
  );
};

export default SideBar;
