import React, { useState } from 'react';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const App = () => {
  const [items, setItems] = useState([]);
  
  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const togglePacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="app">
      <h1>My Travel List</h1>
      <Form onAddItem={addItem} />
      <PackingList items={items} onTogglePacked={togglePacked} onDeleteItem={deleteItem} />
      <Stats items={items} />
    </div>
  );
};

export default App;