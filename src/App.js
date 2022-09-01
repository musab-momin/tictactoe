import React, {useState} from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';


function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // to take a track of whether the player is X or O

  const winner = calculateWinner(board)

  const changeBoard = (position)=>{

    // if there is already value present or we have winner so don't make change in state
    if(board[position] || winner)
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

  return(
    <main className='app'>
        <h1>Tic Tac Toe</h1>
        <p>{ winner ? `winner is ${winner}` : `${isXNext ? "Next player is X" : "Next player is O"}` }</p>
        <Board board={ board } changeBoard={ changeBoard }  />
    </main>
  );
}

export default App;
