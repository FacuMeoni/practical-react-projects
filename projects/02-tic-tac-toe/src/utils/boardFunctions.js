
export const updateBoard = ({index, board, winner}) => {

  // If board[index] have something, dont update.
  if(board[index] || winner )return

  // copy board, write new board index and set the new board on the state.
  const newBoard = [...board];
  newBoard[index] = turn;
  setBoard(newBoard);
  
  // conditional to set the turn.
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)

  //check if any win
  const newWinner = checkWinner(newBoard);
  if (newWinner){
    setWinner(newWinner)
    confetti()
  } else if (checkEndGame(newBoard)){
    setWinner(false)
  }
}