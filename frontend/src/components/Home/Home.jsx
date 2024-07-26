// import React from 'react'
import { Link } from 'react-router-dom';
//url
export default function Home() {
return (
      <>
      <div 
        style={{ 
          backgroundImage:` url("https://media.istockphoto.com/id/1467661374/video/soft-white-background-the-concept-of-abstract-clean-beautiful-soft-shiny-simple-blurred.jpg?s=640x640&k=20&c=2YiaSio1Nh1Zhc1IU0liUUOV85SIFHfcrhYPsG0GEd8=") `
        }}
        className="bg-cover bg-center min-h-screen"
      >
        <div className='min-h-[80vh]'>
        <h1 className="category_heading text-center text-2xl font-bold text-blue-800 pt-4 uppercase">
          Free Games: Level Up Your Gaming
        </h1>
      <div className='flex flex-wrap mx-40 ml-60'>
          {[
            {
              path: '/games/tictactoe',
              imgSrc: 'https://www.eslkidsgames.com/wp-content/uploads/2017/06/ESL-Game-Just-a-Minute-Tic-Tac-Toe.png',
              title: 'Tic Tae Toe'
            },
            {
              path: '/games/clicker',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSYPZnf_gI3phvqHCfHnpbSGLc2luslhoQA&s',
              title: 'Get Coins'
            },
            {
              path: '/games/rockpaperscissors',
              imgSrc: 'https://hips.hearstapps.com/hmg-prod/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg?crop=0.997xw:0.712xh;0.00160xw,0.181xh&resize=640:*',
              title: 'Rock Paper Scissors'
            },
            {
              path: '/games/numberguessing',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkO7O92wz74o8i-Zd_zf2CmZ51Q-0dGBf6w&s',
              title: 'Number Guessing'
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
            },
            {
              path: '/games/pong',
              imgSrc: 'https://www.puzzleshiftcreate.com/wp-content/uploads/2020/11/Pong-game-scratch-thumbnail.jpg',
              title: 'Pong'
            },
            {
              path: 'games/memory',
              imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1y9N1B7QcAb1Gny0Hc_FwcW_1_lMqvcjTwQ&s',
              title: 'Memory Card '
            }
          ].map((game, index) => (
            <div key={index} className="max-w-xs mt-10 mb-5 mx-3.5 bg-white border border-gray-200 rounded-lg dark:border-gray-700">
              <Link to={game.path}>
                <img 
                  className="rounded-t-lg w-full h-48 object-cover" 
                  src={game.imgSrc} 
                  alt={game.title} 
                />
              </Link>
              <div className="p-5">
                <p className="mb-3 font-normal text-black-700 dark:text-black-400">{game.title}</p>
                <Link 
                  to={game.path} 
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Play
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      </>
    );
}