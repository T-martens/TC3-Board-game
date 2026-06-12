import React from 'react';
import './Discord.scss';
import { DISCORD_INVITE_URL, EMAIL_CONTACT, SECTION_IDS } from '../../common/consts';

export const Discord: React.FC = () => {
  return (
    <section className="discord-section" id={SECTION_IDS.discord}>
      <h2>Join us on Discord!</h2>
      <div className="contact-methods-wrapper">
        <div className="contact-method">
          <a href={DISCORD_INVITE_URL}>
            <img src="/images/discord-logo.png" height={50} alt="discord logo"></img>
          </a>
          <p>
            Join our <a href={DISCORD_INVITE_URL}>Discord</a> community to chat with fellow board
            game enthusiasts, stay updated on events, and share your gaming experiences!
          </p>
        </div>
      </div>
    </section>
  );
};
