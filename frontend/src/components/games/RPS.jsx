// src/games/RockPaperScissors.jsx
import { useState } from 'react';

const choices = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const playGame = (userSelection) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(userSelection);
    setComputerChoice(randomChoice);

    if (userSelection === randomChoice) {
      setResult('It\'s a Tie!');
    } else if (
      (userSelection === 'Rock' && randomChoice === 'Scissors') ||
      (userSelection === 'Paper' && randomChoice === 'Rock') ||
      (userSelection === 'Scissors' && randomChoice === 'Paper')
    ) {
      setResult('You Win!');
    } else {
      setResult('You Lose!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Rock Paper Scissors</h1>
      <div className="mb-4">
        {choices.map(choice => (
          <button
            key={choice}
            className="px-4 py-2 m-2 border-2 border-gray-400"
            onClick={() => playGame(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div className="text-xl">
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
