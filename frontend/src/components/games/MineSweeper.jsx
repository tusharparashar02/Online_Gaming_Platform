// src/games/Minesweeper.jsx
import React, { useState, useEffect } from 'react';

const COLS = 10;
const ROWS = 10;
const MINES = 10;

const Minesweeper = () => {
  const [board, setBoard] = useState(createBoard());
  const [gameOver, setGameOver] = useState(false);

  function createBoard() {
    const board = Array.from({ length: ROWS }, () => Array(COLS).fill({ revealed: false, mine: false, adjacentMines: 0 }));
    placeMines(board);
    calculateAdjacentMines(board);
    return board;
  }

  function placeMines(board) {
    let minesPlaced = 0;
    while (minesPlaced < MINES) {
      const x = Math.floor(Math.random() * COLS);
      const y = Math.floor(Math.random() * ROWS);
      if (!board[y][x].mine) {
        board[y][x].mine = true;
        minesPlaced++;
      }
    }
  }

  function calculateAdjacentMines(board) {
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        if (board[y][x].mine) continue;
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dy === 0 && dx === 0) continue;
            const ny = y + dy;
            const nx = x + dx;
            if (ny >= 0 && ny < ROWS && nx >= 0 && nx < COLS && board[ny][nx].mine) {
              count++;
            }
          }
        }
        board[y][x].adjacentMines = count;
      }
    }
  }

  function revealCell(x, y) {
    if (gameOver || board[y][x].revealed) return;
    const newBoard = board.map(row => row.map(cell => ({ ...cell })));
    if (newBoard[y][x].mine) {
      setGameOver(true);
      return;
    }
    newBoard[y][x].revealed = true;
    setBoard(newBoard);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Minesweeper</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, 30px)`,
          gridTemplateRows: `repeat(${ROWS}, 30px)`,
          border: '2px solid gray',
        }}
      >
        {board.flat().map((cell, index) => (
          <div
            key={index}
            onClick={() => revealCell(index % COLS, Math.floor(index / COLS))}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: cell.revealed ? (cell.mine ? 'red' : 'lightgray') : 'white',
              border: '1px solid lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {cell.revealed && !cell.mine ? cell.adjacentMines || ' ' : ''}
          </div>
        ))}
      </div>
      {gameOver && <div className="text-xl mt-4">Game Over</div>}
    </div>
  );
};

export default Minesweeper;
