import React from 'react';

const History = ({ boardHistory, moveTo, active}) => {


    return (
    <ul>
      {boardHistory?.map((_, move) =>(
        <li key={move}>
          <button
          style={{ fontWeight: active === move ? 'bold' : 'normal' }}
            type="button"
            onClick={() => {
                moveTo(move);
            }}
          >
            { move === 0 ? 'Go to start' : `Go to move #${move}` }
          </button>
        </li>
        ))}
    </ul>
  );
};

export default History;
