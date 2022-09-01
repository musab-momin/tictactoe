import React from 'react'
import Square from './Square'

const Board = ({ board, changeBoard, winningSquares }) => {

  const constructBoard = (position)=>{
    const winningCombination = winningSquares.includes(position)
    return <Square value={board[position]} changeBoard={()=>changeBoard(position)} winningCombination={ winningCombination }/> 
  }
 
  return(
    <div className='board'>
        <div className='board-row'>
            { constructBoard(0) }
            { constructBoard(1) }
            { constructBoard(2) }
        </div>
        <div className='board-row'>
            { constructBoard(3) }
            { constructBoard(4) }
            { constructBoard(5) }
        </div>
        <div className='board-row'>
            { constructBoard(6) }
            { constructBoard(7) }
            { constructBoard(8) }
        </div>
    </div>
  )
}

export default Board