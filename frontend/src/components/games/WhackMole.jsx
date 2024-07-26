// src/games/WhackAMole.jsx
import  { useState, useEffect } from 'react';

const WhackAMole = () => {
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newMoles = moles.map(() => Math.random() < 0.3);
      setMoles(newMoles);
    }, 1000);
    return () => clearInterval(timer);
  }, [moles]);

  const handleClick = (index) => {
    if (moles[index]) {
      setScore(score + 1);
      const newMoles = [...moles];
      newMoles[index] = false;
      setMoles(newMoles);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Whack-A-Mole</h1>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {moles.map((mole, index) => (
          <div
            key={index}
            className={`w-24 h-24 border-2 ${mole ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="text-xl">Score: {score}</div>
    </div>
  );
};

export default WhackAMole;
