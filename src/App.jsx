// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import GetNews from './components/News/GetNews';

function App() {
  return (
    <div className="App">
      <Navbar />
      <GetNews />
    </div>
  )
}

export default App
