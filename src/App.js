import React, {useState} from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }]
function App() {

  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setcurrentMove] = useState(0)

  const current = history[currentMove]

  const {winner, winningSquares} = calculateWinner(current.board)

  const changeBoard = (position)=>{

    // if there is already value present or we have winner so don't make change in state
    if(current.board[position] || winner)
      return;

    // changing the state of at perticular index value
    setHistory( prev =>{
      const last = prev[prev.length - 1]
      const newBoard = last.board.map((square, pos)=>{
        // if the position is same than change the value 
        if(pos === position)
          return last.isXNext ? "X" : "O"
        return square
      })
      return [...prev, {board: newBoard, isXNext: !last.isXNext}]
    });
    setcurrentMove(currentMove + 1)
  }

  const moveTo = (move) =>{
   setcurrentMove(move)
  }
 
  const isDraw = current.board.every(ele=>ele!==null)
  
  const startNewGame = ()=>{
    setHistory(NEW_GAME)
    setcurrentMove(0)
  }

  return(
    <main className='app'>
        <h1>Tic Tac Toe</h1>
          <p>   
              { winner && !isDraw && `winner is ${winner}`}
              { !winner && isDraw && 'The game is tied'}
              {!winner && !isDraw && `${current.isXNext ? "Next player is X" : "Next player is O"}`} 
          </p>        
        <Board board={ current.board } changeBoard={ changeBoard } winningSquares = { winningSquares } />
        <button type='button' onClick={startNewGame}> start new game</button>
        <History boardHistory={ history } moveTo = { moveTo } active={ currentMove } />
    </main>
  );
}

export default App;
