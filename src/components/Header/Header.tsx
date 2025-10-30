import React from 'react';

// may also want some sort of nav bar with skip links to the diff sections.
const Header: React.FC = () => {
  return (
    <header className="u-posRelative u-sizeFull">
      <img
        src="/images/logos/logo-with-stem/TC3-Cherry-Black.png"
        alt="TC3 Logo"
        height={150}
      />
            <h1>Welcome to the Twin Cities Cardboard Crew</h1>
    </header>
  );
};

export default Header;
