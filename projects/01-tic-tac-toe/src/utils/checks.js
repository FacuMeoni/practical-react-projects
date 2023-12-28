import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {

  //check all the winner combinations for verify if X or O win
  for(const combo of WINNER_COMBOS){
    const [a,b,c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){ return boardToCheck[a] }
  }
    
  // if didnt exist any combo, return null to draw
  return null
}


export const checkEndGame = (newBoard) => { 
  //check if the game is a draw, veryfing if dont have any empty square
  return newBoard.every((square) => square !== null)
}