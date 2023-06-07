import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import './components/blue'
import './components/red'
import Red from './components/red';
import Blue from './components/blue';
import home from './components/home';

function App() {
  

  return (
    <>
     <div id="container">
      
      <div id="navbar">
        <nav>
          <Link to = '/blue'>Blue Page</Link>
          <Link to = '/red'>Red Page</Link>
          <Link to = '/home'>Home Page</Link>
        </nav>
      </div>
      <div id="main-section">
        <Routes>
          <Route path = '/blue' element = {Blue()} />
          <Route path = '/red'  element  = {Red()} />
          <Route path = '/home' element = {home()} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
