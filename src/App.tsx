import React from 'react';
import Header from './components/Header/Header';

/**
 * DO we want to have separate pages for the about section and events?
 * or just everything on the main page
 * @returns 
 */
const App: React.FC = () => {
  return (
    <div className="container">
      <Header />

      <h1>Welcome to the Twin Cities Cardboard Crew</h1>
            {/* TODO: Added a welcome message/ about section  */}
      {/* TODO: add in the events list. Can be */}
      {/** TODO: a social section as well for email/discord */}
    </div>
  );
};

export default App;
