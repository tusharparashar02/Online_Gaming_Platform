// src/games/SnakeGame.jsx
import  { useState, useEffect } from 'react';

const boardSize = 10;

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const timer = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };
        if (
          newHead.x < 0 ||
          newHead.x >= boardSize ||
          newHead.y < 0 ||
          newHead.y >= boardSize ||
          newSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
        ) {
          setGameOver(true);
          clearInterval(timer);
          return prevSnake;
        }
        newSnake.unshift(newHead);
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * boardSize),
            y: Math.floor(Math.random() * boardSize),
          });
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [direction, food, gameOver]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Snake Game</h1>
      <div className="grid grid-cols-10 gap-1 mb-4">
        {Array.from({ length: boardSize }).map((_, row) => (
          Array.from({ length: boardSize }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className={`w-8 h-8 border-2 ${
                snake.some(segment => segment.x === col && segment.y === row)
                  ? 'bg-green-500'
                  : food.x === col && food.y === row
                  ? 'bg-red-500'
                  : 'bg-gray-300'
              }`}
            />
          ))
        ))}
      </div>
      {gameOver && <div className="text-xl">Game Over</div>}
    </div>
  );
};

export default SnakeGame;
