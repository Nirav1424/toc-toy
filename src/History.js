import React from 'react';
const History = ({ history, moveTo, currentMove }) => {
 
  return (
    <ul className='app1' >
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              style={{
                color: move === currentMove ? 'yellow' : 'red',
                'padding-left': '120px'
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to game start' : `Go to move #${move}`}
              
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
