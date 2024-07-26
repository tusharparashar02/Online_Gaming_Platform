import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import pointer from '../store/PointContext';

const Premium = () => {
  const coins = useContext(pointer);
  const navigate = useNavigate();
  const [warning, setWarning] = useState('');

  const handleClick = (e, path) => {
    e.preventDefault();
    if (coins.points < 10) {
        setWarning(<Link to="/games/clicker" className='text-blue-800  text-2xl text-decoration-line: underline'>Get Coins</Link>);
    } else {
      setWarning('');
      coins.points = coins.points - 10;
      navigate(path);
    }
  }

  return (
    <>
      <div 
        style={{ 
          backgroundImage: `url("https://media.istockphoto.com/id/1467661374/video/soft-white-background-the-concept-of-abstract-clean-beautiful-soft-shiny-simple-blurred.jpg?s=640x640&k=20&c=2YiaSio1Nh1Zhc1IU0liUUOV85SIFHfcrhYPsG0GEd8=")` 
        }}
        className="bg-cover bg-center min-h-screen"
      >
        <h1 className="category_heading text-center text-2xl font-bold text-blue-800 pt-4 uppercase">
          Welcome To Premium Membership: Level Up Your Gaming
        </h1>
        {warning && (
          <div className="text-center text-red-600 mb-4">{warning}</div>
        )}
        <div className='flex flex-wrap mx-40 ml-60'>
          {[
            {
              path: '/games/chess/',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5blnGC3KfI64T2MDqsPhEsO80-1H7aylzA&s',
              title: 'Chess'
            },
            {
              path: '/games/whackamole',
              imgSrc: 'https://codecanyon.img.customer.envatousercontent.com/files/382155751/whackamole_bg.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=77da212ceaf89c3cfa35d83b3ddb19d6',
              title: 'Whackamole'
            },
            {
              path: '/games/snake',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-d1D3os2A_8b4UvQDEaM7N0JbkcYxYvM5A&s',
              title: 'Snake'
            },
            {
              path: '/games/breakout',
              imgSrc: 'https://res.cloudinary.com/breakoutgames/t_cover/kids-at-breakoutjpeg-04f5566d3c161bea1ae3034b935abe9394ba8124.jpg',
              title: 'Break Out'
            },
            {
              path: '/games/tetris',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBf94lTXeNe84Tkqjut0E-wBYsKAluy7C0Hg&s',
              title: 'Tetris'
            },
            {
              path: '/games/minesweeper',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuS0Uz_VD67b-IWkC-w0e9kWgxdkHPs4wRLA&s',
              title: 'Minesweeper'
            }
          ].map((game, index) => (
            <div key={index} className="max-w-xs mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg dark:border-gray-700">
              <Link to="#" onClick={(e) => handleClick(e, game.path)}>
              
                <img 
                  className="rounded-t-lg w-full h-48 object-cover" 
                  src={game.imgSrc} 
                  alt={game.title} 
                />
              </Link>
              <div className="p-5">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">{game.title}</p>
                <Link 
                  onClick={(e) => handleClick(e, game.path)}
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Play
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Premium;
