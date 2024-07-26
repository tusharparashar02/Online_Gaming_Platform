// src/games/PongGame.jsx
import { useState, useEffect, useRef } from 'react';

const PongGame = () => {
  const canvasRef = useRef(null);
  const [ball, setBall] = useState({ x: 150, y: 100, dx: 2, dy: 2 });
  const [paddle, setPaddle] = useState({ x: 140 });
  const paddleWidth = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const interval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
      ctx.fillRect(paddle.x, canvas.height - 10, paddleWidth, 10);

      if (ball.x + ball.dx > canvas.width - 5 || ball.x + ball.dx < 5) {
        setBall((prevBall) => ({ ...prevBall, dx: -prevBall.dx }));
      }
      if (ball.y + ball.dy < 5) {
        setBall((prevBall) => ({ ...prevBall, dy: -prevBall.dy }));
      } else if (ball.y + ball.dy > canvas.height - 15) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {
          setBall((prevBall) => ({ ...prevBall, dy: -prevBall.dy }));
        } else {
          clearInterval(interval);
        }
      }

      setBall((prevBall) => ({
        ...prevBall,
        x: prevBall.x + prevBall.dx,
        y: prevBall.y + prevBall.dy,
      }));
    }, 10);

    const handleMouseMove = (e) => {
      const relativeX = e.clientX - canvas.offsetLeft;
      if (relativeX > 0 && relativeX < canvas.width) {
        setPaddle({ x: relativeX - paddleWidth / 2 });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ball, paddle.x]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Pong Game</h1>
      <canvas ref={canvasRef} width="300" height="200" className="border-2 border-gray-300" />
    </div>
  );
};

export default PongGame;
