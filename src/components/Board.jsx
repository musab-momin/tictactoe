import React, {useState} from 'react'
import Square from './Square'

const Board = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // to take a track of whether the player is X or O


  const changeBoard = (position)=>{

    // if there is already value present
    if(board[position])
      return;

    // changing the state of at perticular index value
    setBoard( prev =>{
      return prev.map((square, pos)=>{
        // if the position is same than change the value 
        if(pos === position)
          return isXNext ? "X" : "O"
      
        return square
      })
    });
    setIsXNext(!isXNext)
  }

  const constructBoard = (position)=>{
    return <Square value={board[position]} changeBoard={()=>changeBoard(position)}/> 
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