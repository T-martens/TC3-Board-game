import React from 'react';
import { DISCORD_INVITE_URL, EMAIL_CONTACT, SECTION_IDS } from '../../common/consts';
import './contact.scss';

// need an image for discord and email icons

export const Contact: React.FC = () => {
  return (
    <section className="contact-section" id={SECTION_IDS.contact}>
      <h2>Contact Us</h2>
      <div className="contact-methods-wrapper">
        <div className="contact-method">
          <h3>Email</h3>
          <p>
            Have questions or want to get in touch? Reach out to us via email at{' '}
            <a href={`mailto:${EMAIL_CONTACT}`}>{EMAIL_CONTACT}</a>
          </p>
        </div>
        <div className="contact-method">
          <h3>Discord</h3>
          <img src="/images/discord-logo.png" height={50} alt="discord logo"></img>
          <p>
            Join our Discord community to chat with fellow board game enthusiasts, stay updated on
            events, and share your gaming experiences. Click{' '}
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
              here
            </a>{' '}
            to join!
          </p>
        </div>
      </div>
    </section>
  );
};
