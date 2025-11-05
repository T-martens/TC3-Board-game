import React from 'react';
import GoogleCalendarEmbed from '../Calendar/Calendar';
import { CALENDAR_API_URL, SECTION_IDS } from '../../common/consts';
import './Events.scss';

export const Events: React.FC = () => {
  return (
    <div className="events-section" id={SECTION_IDS.events}>
      <h2>Events</h2>
      <p>
        Typically our weekly Thursday board game nights meet at Dual Citizen Brewery. Can be subject
        to change, so always check the calendar!. We also host special events and game days
        throughout the month such as a trick taking game day or meetups in the north or south metro.
      </p>
      <GoogleCalendarEmbed
        calendarId={CALENDAR_API_URL}
        view="MONTH"
        tz="America/Chicago"
        height={700}
      />
    </div>
  );
};
