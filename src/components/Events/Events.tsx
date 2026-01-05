import React from 'react';
import GoogleCalendarEmbed from '../Calendar/Calendar';
import { CALENDAR_API_URL, SECTION_IDS } from '../../common/consts';
import './Events.scss';

export const Events: React.FC = () => {
  return (
    <div className="events-section" id={SECTION_IDS.events}>
      <h2>Events</h2>
      <div className="events--wrapper">
        <div className="events--description">
          <p>
            Our weekly Thursday board game nights typically meets at{' '}
            <a href="https://maps.app.goo.gl/ZvidgsxCbZERwPF69">Dual Citizen Brewery</a> in Saint
            Paul.
          </p>
          <p>
            We also host special events and game days throughout the month such as a trick taking
            game day or meetups in the north or south metro. Check out our calendar for upcoming
            events!
          </p>
        </div>
        <GoogleCalendarEmbed
          calendarId={CALENDAR_API_URL}
          view="MONTH"
          tz="America/Chicago"
          height={700}
        />
      </div>
    </div>
  );
};
