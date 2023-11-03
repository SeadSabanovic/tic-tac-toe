import { useState } from "react";
import "./App.scss";
import Board from "./Board";
import Header from "./Header";
import { COMBINATIONS } from "./combinations";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [turns, setTurns] = useState([]);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  let winner;
  let draw = turns.length === 9 && !winner;

  for (const combination of COMBINATIONS) {
    const firstField = board[combination[0].row][combination[0].column];
    const secondField = board[combination[1].row][combination[1].column];
    const thirdField = board[combination[2].row][combination[2].column];

    if (firstField && firstField === secondField && firstField === thirdField) {
      winner = firstField;
    }
  }

  function reset() {
    setActivePlayer("X");
    setTurns([]);
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    winner = undefined;
    draw = undefined;
  }

  function handleSelect(row, col) {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard.map((inner) => [...inner])];
      newBoard[row][col] = activePlayer;
      return newBoard;
    });

    setTurns((prevTurns) => {
      const newTurns = [
        { field: { row, col }, player: activePlayer },
        ...prevTurns,
      ];
      return newTurns;
    });
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  }
  return (
    <div className="App">
      <Header activePlayer={activePlayer} />
      <Board
        handleSelect={handleSelect}
        activePlayer={activePlayer}
        board={board}
        winner={winner}
        draw={draw}
        reset={reset}
      />
    </div>
  );
}

export default App;
