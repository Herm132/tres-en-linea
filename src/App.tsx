import { useState, useEffect } from 'react';

interface SquareProps {
  readonly value: string;
  readonly onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  // Cambiar color según el valor de la casilla (X o O)
  const squareStyle = {
    backgroundColor: value === 'X' ? 'lightblue' : value === 'O' ? 'lightcoral' : 'white',
  };

  return (
    <button className="square" onClick={onSquareClick} style={squareStyle}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [showWinner, setShowWinner] = useState<string | null>(null);

  // Este efecto se activa cuando se detecta un ganador.
  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setShowWinner(winner);
      setScore((prevScore) => ({
        ...prevScore,
        [winner as 'X' | 'O']: prevScore[winner as 'X' | 'O'] + 1,
      }));
    }
  }, [squares]); // Se vuelve a ejecutar cada vez que se actualizan las casillas.

  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Ganador: ' + winner;
  } else {
    status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
    setShowWinner(null); // Cerrar el pop-up al reiniciar
  };

  return (
    <div className="parent">
      <div className="status div1">
        {status}
        <div>Puntos - X: {score.X} | O: {score.O}</div>
      </div>
      <div className="div2">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      </div>
      <div className="div3">
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      </div>
      <div className="div4">
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="div5">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      </div>
      <div className="div6">
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      </div>
      <div className="div7">
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="div8">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="div9">
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      </div>
      <div className="div10">
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="div11">
        <button onClick={handleRestart}>Reiniciar</button>
      </div>
      
      {showWinner && (
        <div className="popup">
          <div>¡Jugador {showWinner} ha ganado!</div>
          <button onClick={handleRestart}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

type CalculateWinner = (squares: string[]) => string | null;

const calculateWinner: CalculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
