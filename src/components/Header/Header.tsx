import React from 'react';
import './Header.scss';
import { Navigation } from '../Navigation/Navigation';
// may also want some sort of nav bar with skip links to the diff sections.
const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        className="desktop-logo"
        src="images/logos/logo-without-stem/TC3-Red-and-Black.png"
        alt="TC3 Logo Desktop"
      />
      <img
        className="mobile-logo"
        src="images/logos/die-without-stem/TC3-Cherry-Die.png"
        alt="TC3 Logo Mobile"
      />
      <Navigation />
    </header>
  );
};

export default Header;
