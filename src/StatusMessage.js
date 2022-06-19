import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.boare.every(el => el !== null);
const Red = {'color' : 'red'}
  return (
    <div className='status-message'>{winner && (
      < >

       <span style={Red}></span> Winner is {' '}
        <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span></>)}

      {!winner &&
        !noMovesLeft &&

        (<>
          Next palyer is {' '}
          <span className={current.isXnext ? 'text-green' : 'text-orange'}>
            {current.isXnext ? 'X' : 'O'}{" "} </span>
        </>)
      }

      {!winner && noMovesLeft &&
        <>
          <span className='text-green'>X</span>  and
          <span className='text-green'>O</span>  tied
        </>}

    </div>
  );
};

export default StatusMessage;
