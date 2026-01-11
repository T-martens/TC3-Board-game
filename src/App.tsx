import React from 'react';
import Header from './components/Header/Header';
import { Events } from './components/Events/Events';
import { Contact } from './components/Contact/Contact';
import { Hosts } from './components/Hosts/Hosts';
import { About } from './components/About/About';

/**
 * DO we want to have separate pages for the about section and events?
 * or just everything on the main page
 */
const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <h1>Welcome to the Twin Cities Cardboard Crew</h1>
      <About />
      <Events />
      <Hosts />
      <Contact />
    </div>
  );
};

export default App;
