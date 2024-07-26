// src/games/CounterGame.jsx
import React, { useState } from 'react';

const CounterGame = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Counter Game</h1>
      <div className="mb-4">
        <button
          className="px-4 py-2 m-2 border-2 border-gray-400"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 m-2 border-2 border-gray-400"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 m-2 border-2 border-gray-400"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
      <div className="text-xl">Count: {count}</div>
    </div>
  );
};

export default CounterGame;
