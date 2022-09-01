import React from 'react';

const StatusMessage = ({ winner, isDraw, current }) => {
  return (
    <div>
      {winner && !isDraw && (
        <>
          winner is {` `}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && isDraw && <span className='text-orange'>Game is Draw</span>}
      {!winner && !isDraw && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
    </div>
  );
};

export default StatusMessage;
