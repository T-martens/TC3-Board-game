import React from 'react';
import Header from './components/Header/Header';
import GoogleCalendarEmbed from './components/Calendar/Calendar';
import { CALENDAR_API_URL } from './common/consts';

/**
 * DO we want to have separate pages for the about section and events?
 * or just everything on the main page
 * @returns
 */
const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      {/* TODO: Added a welcome message/ about section  */}
      <GoogleCalendarEmbed
        calendarId={CALENDAR_API_URL}
        view="MONTH"
        tz="America/Chicago"
        height={700}
      />
      {/** TODO: a social section as well for email/discord */}
    </div>
  );
};

export default App;
