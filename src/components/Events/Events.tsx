import React from 'react';
import GoogleCalendarEmbed from '../Calendar/Calendar';
import { CALENDAR_API_URL, SECTION_IDS } from '../../common/consts';
import './Events.scss';

export const Events: React.FC = () => {
  return (
    <div className="events-section" id={SECTION_IDS.events}>
      <h2>Events</h2>
      <GoogleCalendarEmbed
        calendarId={CALENDAR_API_URL}
        view="MONTH"
        tz="America/Chicago"
        height={700}
      />
    </div>
  );
};
