// src/games/MemoryCardGame.jsx
import React, { useState, useEffect } from 'react';

const cardsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'];

const MemoryCardGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffledCards = [...cardsArray].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2) return;

    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const firstCardIndex = flippedCards[0];
      const secondCardIndex = index;

      if (cards[firstCardIndex] === cards[secondCardIndex]) {
        setMatchedCards([...matchedCards, firstCardIndex, secondCardIndex]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Memory Card Game</h1>
      <div className="grid grid-cols-4 gap-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-24 h-24 flex items-center justify-center border-2 ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? 'bg-blue-500'
                : 'bg-gray-300'
            }`}
            onClick={() => handleCardClick(index)}
          >
            {(flippedCards.includes(index) || matchedCards.includes(index)) && (
              <span className="text-2xl text-white">{card}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryCardGame;
