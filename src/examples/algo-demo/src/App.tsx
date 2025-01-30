// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router';
import './App.css'
import { maze_30x30 } from './constants/maze'
// import Maze from './Maze'
import Maze2 from './Maze2'
import PageNotFound from './Page/PageNotFound';
import Home from './Page/Home';

function App() {

  return (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maze" element={<Maze2 maze={maze_30x30}/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      );
}

export default App
