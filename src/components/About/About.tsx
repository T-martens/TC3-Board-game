import React from 'react';
import './About.scss';
import { SECTION_IDS } from '../../common/consts';

export const About: React.FC = () => {
  return (
    <section className="about-section" id={SECTION_IDS.about}>
      <h2>About Us</h2>
      <p>
        We host meetups all over the Twin Cities, and are committed to growing a community that is
        inclusive to all that share the love of board, card and tabletop games within the Twin
        Cities. All are welcome, no matter your background. This includes but is not limited to,
        your engagement, your experience, or the level of competitiveness with which you approach
        games.
      </p>
    </section>
  );
};
