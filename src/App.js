import React from 'react';
import './App.css';
import MenuList from './components/MenuList';
import foodItems from './data.js';



function App() {

  const [isFavoriteArray, setIsFavoriteArray] = React.useState(foodItems.map((item)=>item.isFavorite));

  function onClick(index, isFavorite) {
    setIsFavoriteArray(isFavoriteArray.map( (e, i) => (i === index) ? isFavorite : e ));
  }

  return (
    <div className="App">
      <h1>Wild Restaurant Menu</h1>
      <MenuList
        foodItems={foodItems} onClick={onClick} states={isFavoriteArray}
      />
    </div>
  );
}

export default App;
