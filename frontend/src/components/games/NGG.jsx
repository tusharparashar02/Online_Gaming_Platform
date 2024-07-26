// src/games/NumberGuessingGame.jsx
import React, { useState } from 'react';

const NumberGuessingGame = () => {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const num = parseInt(guess);
    if (num > targetNumber) {
      setMessage('Too High!');
    } else if (num < targetNumber) {
      setMessage('Too Low!');
    } else {
      setMessage('Correct!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Number Guessing Game</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="mb-4 p-2 border-2 border-gray-400"
      />
      <button
        className="px-4 py-2 mb-4 border-2 border-gray-400"
        onClick={handleGuess}
      >
        Guess
      </button>
      <div className="text-xl">{message}</div>
    </div>
  );
};

export default NumberGuessingGame;
