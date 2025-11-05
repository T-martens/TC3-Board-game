import React from 'react';
import Header from './components/Header/Header';
import { Events } from './components/Events/Events';
import { Contact } from './components/Contact/Contact';

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
      <Events />
      <Contact />
    </div>
  );
};

export default App;
