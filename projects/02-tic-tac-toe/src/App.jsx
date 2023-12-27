import './App.css'
import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './utils/checks'
import { WinnerModal } from './components/WinnerModal'
import { Turn } from './components/Turn'
import { Board } from './components/Board'
import { saveGameStorage, resetGameStorage } from './utils/storage'

function App() {
  const [board, setBoard] = useState(() => {

    const localStorageBoard = window.localStorage.getItem('board');
    

    //if dont have localStorageBoard the and return array empty
    return !localStorageBoard 
    ? Array(9).fill(null)
    : JSON.parse(localStorageBoard)

  })

  //null to start, false to draw and true to winner
  const [winner, setWinner] = useState(null);
  
  const [turn, setTurn] = useState(() => {

    const turnLocalStorage = window.localStorage.getItem('turn');

    return turnLocalStorage ?? TURNS.X
  }); 

  const resetGame = () => {

    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }  

  const updateBoard = (index) => {
    // If board[index] have something, dont update.
    if(board[index] || winner )return
  
    // copy board, write new board index and set the new board on the state.
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    
    // conditional to set the turn.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn);

    //check if any win
    const newWinner = checkWinner(newBoard);

    if (newWinner){
      setWinner(newWinner)
      confetti()
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  useEffect(() => {
    //save the game on local
    saveGameStorage({
      board: board,
      turn: turn
    });

  }, [turn, board])
    
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>
        <span>
          Reset game
        </span>
      </button>
      
      <Board board={board} updateBoard={updateBoard}/>
    
      <Turn turn={turn}/>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
