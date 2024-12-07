import React from 'react';

const Stats = ({ items }) => {
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const completionPercentage = totalItems ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <div>
      <p>Total Items: {totalItems}</p>
      <p>Packed Items: {packedItems}</p>
      <p>Packing Completion: {completionPercentage}%</p>
    </div>
  );
};

export default Stats;