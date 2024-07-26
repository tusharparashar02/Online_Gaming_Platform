// src/games/TetrisGame.jsx
import React, { useEffect, useState } from 'react';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const TetrisGame = () => {
  const [board, setBoard] = useState(createBoard());
  const [tetromino, setTetromino] = useState(randomTetromino());
  const [position, setPosition] = useState({ x: COLS / 2 - 1, y: 0 });
  const [gameOver, setGameOver] = useState(false);

  function createBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  function randomTetromino() {
    const shapes = [
      [[1, 1, 1, 1]], // I
      [[1, 1, 1], [0, 1, 0]], // T
      [[1, 1], [1, 1]], // O
      [[1, 1, 0], [0, 1, 1]], // Z
      [[0, 1, 1], [1, 1, 0]] // S
    ];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    return shape;
  }

  function drawBoard() {
    const newBoard = createBoard();
    tetromino.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const boardX = position.x + x;
          const boardY = position.y + y;
          if (boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
            newBoard[boardY][boardX] = value;
          }
        }
      });
    });
    setBoard(newBoard);
  }

  function moveTetromino(dx, dy) {
    const newPos = { x: position.x + dx, y: position.y + dy };
    if (isValidMove(newPos)) {
      setPosition(newPos);
      drawBoard();
    }
  }

  function isValidMove(newPos) {
    return tetromino.every((row, y) =>
      row.every((value, x) => {
        if (value) {
          const boardX = newPos.x + x;
          const boardY = newPos.y + y;
          return (
            boardX >= 0 &&
            boardX < COLS &&
            boardY >= 0 &&
            boardY < ROWS &&
            !board[boardY][boardX]
          );
        }
        return true;
      })
    );
  }

  useEffect(() => {
    if (gameOver) return;

    const timer = setInterval(() => {
      moveTetromino(0, 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [tetromino, position, gameOver]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Tetris Game</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, ${BLOCK_SIZE}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${BLOCK_SIZE}px)`,
          border: '2px solid gray',
        }}
      >
        {board.flat().map((block, index) => (
          <div
            key={index}
            style={{
              width: `${BLOCK_SIZE}px`,
              height: `${BLOCK_SIZE}px`,
              backgroundColor: block ? 'blue' : 'white',
              border: '1px solid lightgray',
            }}
          />
        ))}
      </div>
      {gameOver && <div className="text-xl mt-4">Game Over</div>}
    </div>
  );
};

export default TetrisGame;
