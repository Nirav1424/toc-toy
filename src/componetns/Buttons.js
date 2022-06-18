import React from 'react'
import Button from './Button';

function Buttons({boare,handleClick,wingSqare}) {

 
  const render = position => {
  const isWinnnigchange = wingSqare.includes(position)

    return <Button value={boare[position]} 
    onClick={() => { handleClick(position) } }
     isWinnnigchange={isWinnnigchange} />
  }

  return (
    <div className='board'>
      <div className='board-row'>
        {render(0)}
        {render(1)}
        {render(2)}
      </div>
      <div className='board-row'>
      {render(3)}
      {render(4)}
      {render(5)}


      </div>
      <div className='board-row'>
      {render(6)}
      {render(7)}
      {render(8)}
      </div>
    </div>
  )
}

export default Buttons;