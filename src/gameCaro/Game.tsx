import React from 'react';
import Board from './Board';
import calculateWinner from './Winner';

export default function GameFunction() {
  const [xIsNext, SetXIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  const status = winner ? `winner ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(i: any) {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = history[history.length - 1];
    const squares = newCurrent.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([{ squares: squares }]));
    SetXIsNext(!xIsNext);
  }

  function jumpTo(step: any) {
    SetXIsNext(step % 2 === 0);
    setStepNumber(step);
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : `Go to game start`;
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} handleClick={(i: any) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
