import React from 'react';

const Square = ({ value, changeBoard, winningCombination }) => {
  return (
    <button
      type="button"
      className={`square ${winningCombination ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={changeBoard}
    >
      {value}
    </button>
  );
};

export default Square;
