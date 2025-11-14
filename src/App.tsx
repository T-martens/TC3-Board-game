import React from 'react';
import Header from './components/Header/Header';
import { Events } from './components/Events/Events';
import { Contact } from './components/Contact/Contact';
import { Hosts } from './components/Hosts/Hosts';

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
      <Events />
      <Hosts />
      <Contact />
    </div>
  );
};

export default App;
