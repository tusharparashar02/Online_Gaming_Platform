// src/games/BreakoutGame.jsx
import { useState, useEffect, useRef } from 'react';

const BreakoutGame = () => {
  const canvasRef = useRef(null);
  const [ball, setBall] = useState({ x: 300, y: 400, dx: 2, dy: -2 });
  const [paddle, setPaddle] = useState({ x: 250 });
  const [bricks, setBricks] = useState(createBricks());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function createBricks() {
    const bricks = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 3; j++) {
        bricks.push({ x: i * 60 + 10, y: j * 20 + 30, width: 50, height: 15, visible: true });
      }
    }
    return bricks;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const interval = setInterval(() => {
      if (gameOver) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ball
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();

      // Draw paddle
      ctx.fillRect(paddle.x, canvas.height - 10, 100, 10);

      // Draw bricks
      bricks.forEach((brick) => {
        if (brick.visible) {
          ctx.fillStyle = 'red';
          ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
        }
      });

      // Ball movement
      setBall((prevBall) => {
        let newDx = prevBall.dx;
        let newDy = prevBall.dy;

        if (prevBall.x + prevBall.dx > canvas.width - 10 || prevBall.x + prevBall.dx < 10) {
          newDx = -prevBall.dx;
        }
        if (prevBall.y + prevBall.dy < 10) {
          newDy = -prevBall.dy;
        } else if (prevBall.y + prevBall.dy > canvas.height - 20) {
          if (prevBall.x > paddle.x && prevBall.x < paddle.x + 100) {
            newDy = -prevBall.dy;
          } else {
            setGameOver(true);
            clearInterval(interval);
            return prevBall;
          }
        }

        const newBall = {
          x: prevBall.x + newDx,
          y: prevBall.y + newDy,
          dx: newDx,
          dy: newDy,
        };

        // Ball and brick collision
        bricks.forEach((brick) => {
          if (
            brick.visible &&
            newBall.x > brick.x &&
            newBall.x < brick.x + brick.width &&
            newBall.y > brick.y &&
            newBall.y < brick.y + brick.height
          ) {
            brick.visible = false;
            setScore((prevScore) => prevScore + 10);
            newDy = -newDy;
          }
        });

        return newBall;
      });
    }, 10);

    const handleMouseMove = (e) => {
      const relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.width - 100) {
        setPaddle({ x: relativeX - 50 });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ball, paddle, bricks, gameOver]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Breakout Game</h1>
      <canvas ref={canvasRef} width="600" height="400" className="border-2 border-gray-300" />
      {gameOver && <div className="text-xl mt-4">Game Over. Score: {score}</div>}
    </div>
  );
};

export default BreakoutGame;
