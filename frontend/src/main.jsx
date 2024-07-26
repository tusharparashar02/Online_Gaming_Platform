import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Premium from './components/Premium/Premium.jsx'
import Signup from './components/Signup/Signup.jsx'
import Signin from './components/Signin/Signin.jsx'
import Error from './components/Error/Error.jsx'
import About from './components/About/About.jsx'
import Logout from './components/Logout/Logout.jsx'
import { AuthProvider } from './store/auth.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChessGame from './components/games/ChessGame.jsx'
import TicTacToe from './components/games/TicTaeToe.jsx'
import CounterGame from './components/games/SCG.jsx'
import NumberGuessingGame from './components/games/NGG.jsx'

import RockPaperScissors from './components/games/RPS.jsx'
import MemoryCardGame from './components/games/MCG.jsx'
import WhackAMole from './components/games/WhackMole.jsx'
import SnakeGame from './components/games/SnakeGame.jsx'
import PongGame from './components/games/PongGame.jsx'
import ClickerGame from './components/games/ClickerGmae.jsx'
import BreakoutGame from './components/games/BreakoutGmae.jsx'
import TetrisGame from './components/games/Tetris.jsx'
import Minesweeper from './components/games/MineSweeper.jsx'
import App from './App.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>}/>
      <Route path='Contacts'element={<Contacts/>} />
      <Route path='Premium'element={<Premium/>} />
      <Route path='Signup'element={<Signup/>} />
      <Route path='Signin'element={<Signin/>} />
      <Route path='Logout'element={<Logout/>}/>
      <Route path="games/chess" element={<ChessGame />} />
      <Route path="games/tictactoe" element={<TicTacToe />} />
      <Route path="games/memory" element={<MemoryCardGame />} />
        <Route path="games/rockpaperscissors" element={<RockPaperScissors />} />
        <Route path="games/counter" element={<CounterGame />} />
        <Route path="games/numberguessing" element={<NumberGuessingGame />} />
        <Route path="games/whackamole" element={<WhackAMole />} />
        <Route path="games/snake" element={<SnakeGame />} />
        <Route path="games/pong" element={<PongGame />} />
        <Route path="games/clicker" element={<ClickerGame />} />
        <Route path="games/breakout" element={<BreakoutGame />} />
        <Route path="games/tetris" element={<TetrisGame />} />
        <Route path="games/minesweeper" element={<Minesweeper />} />
        
      <Route path='*' element={<Error/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </React.StrictMode>
  </AuthProvider>
)
