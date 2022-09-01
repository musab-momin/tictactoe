import React from 'react';
import Board from './components/Board';
import './styles/root.scss';


function App() {
  return(
    <main className='app'>
        <h1>Tic Tac Toe</h1>
        <Board />
    </main>
  );
}

export default App;
