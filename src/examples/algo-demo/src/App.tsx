// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router';
import './App.css'
// import Maze from './Maze'
import Maze2 from './Maze2'
import PageNotFound from './Page/PageNotFound';
import Home from './Page/Home';
import Maze from './Page/Maze';
import Baloon from './Page/Baloon';

function App() {

  return (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maze" element={<Maze />} />
            <Route path="/baloon" element={<Baloon />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      );
}

export default App
