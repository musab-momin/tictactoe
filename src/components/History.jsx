import React from 'react';

const History = ({ boardHistory, moveTo, active }) => {
  return (
    <div className='history-wrapper'>
      <ul className="history">
        {boardHistory?.map((_, move) => (
          <li key={move}>
            <button
              className={`btn-move ${ active===move ? 'active' : '' }`}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to start' : `Go to move #${move}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
