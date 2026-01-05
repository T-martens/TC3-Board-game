import React, { useState } from 'react';
import './navigation.scss';
import { SECTION_IDS } from '../../common/consts';

export const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile-navigation">
      <button className="menu-button" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <img src="/images/logos/close-icon.png" alt="Close menu" className="close-icon" />
        ) : (
          <>
            <div className="hamburger-dash">&nbsp;</div>
            <div className="hamburger-dash">&nbsp;</div>
            <div className="hamburger-dash">&nbsp;</div>
          </>
        )}
      </button>
      {isOpen && (
        <div className="mobile-menu">
          <a
            className="mobile-link"
            href={`#${SECTION_IDS.about}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            className="mobile-link"
            href={`#${SECTION_IDS.events}`}
            onClick={() => setIsOpen(false)}
          >
            Events
          </a>
          <a
            className="mobile-link"
            href={`#${SECTION_IDS.hosts}`}
            onClick={() => setIsOpen(false)}
          >
            Hosts
          </a>
          <a
            className="mobile-link"
            href={`#${SECTION_IDS.contact}`}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};
