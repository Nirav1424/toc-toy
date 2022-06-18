import './componetns/root.scss';
import Buttons from './componetns/Buttons';
import React, { useState } from 'react'
import { calculateWiner } from './Helper';
import History from './History';
import StatusMessage from './StatusMessage';

function App() {

  const NEW_GAME = [{ boare: Array(9).fill(null), isXnext: true}];
  const [history, sethistory] = useState(NEW_GAME );
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const{ winner,wingSqare} = calculateWiner(current.boare);
  // const message = winner ? `Winner is ${winner}` :`Next player is ${current.isXnext ? 'X' : 'O'}`;
  const handleClick = (position) => {

  

    if (current.boare[position] || winner) {
      return;
    }

    sethistory((prev) => {

      const last = prev[prev.length - 1];

      const newBoard = last.boare.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ boare: newBoard, isXnext: !last.isXnext });
    });
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  const newGame = ()=>{
    sethistory(NEW_GAME);
    setCurrentMove(0);

  }
  

  return (
    <>
      <h1 className='app'>TIC TAC TOY</h1>
      <StatusMessage winner={winner} current={current} />
      <Buttons handleClick={handleClick}  boare={current.boare} wingSqare={wingSqare}/>
      <button onClick={newGame}>Start new game</button>
      < History history={history} moveTo={moveTo} currentMove={currentMove} />
    </>
  );
}

export default App;
