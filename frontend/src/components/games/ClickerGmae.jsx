// src/games/ClickerGame.jsx
import { useState,useContext, useEffect } from 'react';

import pointer from '../store/PointContext';


const ClickerGame = () => {
  const coins=useContext(pointer);
  const [score, setScore] = useState(10);
  useEffect(()=>{
    coins.points=score;
    console.log(coins.points);

  },[score])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Get Coins</h1>
      <button
        className="px-4 py-2 mb-4 border-2 border-gray-400"
        onClick={() => setScore(score + 5)}
      >
        Click Me!
      </button>
      <div className="text-xl">Score: {score}</div>
    </div>
  );
};

export default ClickerGame;

