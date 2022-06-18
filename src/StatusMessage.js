import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.boare.every(el => el !== null);

  return (
    
    <h2 className='app1'>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXnext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
