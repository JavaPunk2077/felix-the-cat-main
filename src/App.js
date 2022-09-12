import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About.js"
import News from "./components/News/News.js"
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="about" element={ <About/> } />
        <Route path="News" element={ <News/> } />
      </Routes>
    </div>
  )
}

export default App