import React from 'react';

import Dish from './container/dishes';
import Restaurants from './container/restaurants';
import './App.css';

function App() {
  return (
      <div className="App">
          <Dish />
          <Restaurants />
    </div>
  );
}

export default App;
