import React from 'react';
import Dish from './container/dishes';
import Restaurants from './container/restaurants';
import './App.css';
import { Restaurant } from './components/Restaurant/Restaurant';

function App() {
  return (

      <div className="App">
          <Restaurant />
    </div>

  );
}

export default App;
