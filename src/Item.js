import React from 'react';

const Item = ({ item, onTogglePacked, onDeleteItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      {item.description} (x{item.quantity})
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </li>
  );
};

export default Item;
