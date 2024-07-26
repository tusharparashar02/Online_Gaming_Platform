// src/games/ChessGame.jsx
import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());

  const handleMove = (sourceSquare, targetSquare) => {
    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q', // always promote to a queen for simplicity
    });

    if (move) {
      setGame(gameCopy);
    }
  };

  const onDrop = ({ sourceSquare, targetSquare }) => {
    handleMove(sourceSquare, targetSquare);
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-full max-w-md">
      <Chessboard
        position={game.fen()}
        onDrop={onDrop}
        boardStyle={{
          borderRadius: '5px',
          boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
        }}
        squareStyles={{
          light: { backgroundColor: '#f0d9b5' },
          dark: { backgroundColor: '#b58863' },
        }}
      />
      </div>
    </div>
  );
};

export default ChessGame;