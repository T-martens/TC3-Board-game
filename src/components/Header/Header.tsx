import React from 'react';
import './Header.scss';
// may also want some sort of nav bar with skip links to the diff sections.
const Header: React.FC = () => {
  return (
    <header className="header">
      <img src="/images/logos/logo-with-stem/TC3-Cherry-Black.png" alt="TC3 Logo" />
      <h1>Welcome to the Twin Cities Cardboard Crew</h1>
    </header>
  );
};

export default Header;
