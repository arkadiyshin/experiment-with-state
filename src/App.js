import React from 'react';
import './App.css';
import MenuList from './components/MenuList';
import foodItems from './data.js';
import MenuContext from "./context/MenuContext"


function App() {

  const [isFavoriteArray, setIsFavoriteArray] = React.useState(foodItems.map((item) => item.isFavorite));

  return (
    <div className="App">
      <h1>Wild Restaurant Menu</h1>
      <MenuContext.Provider value={ {isFavoriteArray, setIsFavoriteArray} }>
        <MenuList foodItems={foodItems} />
      </MenuContext.Provider>
    </div>
  );
}

export default App;
