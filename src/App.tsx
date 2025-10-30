import React from 'react';
import Hello from './components/Hello';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <h1>Welcome to the Twin Cities Cardboard Crew</h1>
      <Hello />
    </div>
  );
};

export default App;
