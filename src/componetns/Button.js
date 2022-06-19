import React from 'react'


function Button({value ,onClick,isWinnnigchange}) {
  return (<>
    <button className='square' onClick={onClick} style={{
      color : isWinnnigchange ?'yellow' : 'red',
    }}>{value}</button>
</>
  )
}

export default Button;