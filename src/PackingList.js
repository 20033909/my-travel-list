import React from 'react';
import Item from './Item';

const PackingList = ({ items, onTogglePacked, onDeleteItem }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            onTogglePacked={onTogglePacked}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
