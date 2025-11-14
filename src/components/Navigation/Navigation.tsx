import React from 'react';
import { MobileNavigation } from './MobileNavigation';
import './navigation.scss';
import { DISCORD_INVITE_URL, SECTION_IDS } from '../../common/consts';

export const Navigation: React.FC = () => {
  return (
    <>
      <nav className="navigation">
        <a href={`#${SECTION_IDS.about}`}>About</a>
        <a href={`#${SECTION_IDS.events}`}>Events</a>
        <a href={`#${SECTION_IDS.hosts}`}>Hosts</a>
        <a href={`#${SECTION_IDS.contact}`}>Contact Us</a>
        <a
          href={`${DISCORD_INVITE_URL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="discord-link"
        >
          <img src="images/discord-logo.png" height={44}></img>
        </a>
      </nav>
      <MobileNavigation />
    </>
  );
};
