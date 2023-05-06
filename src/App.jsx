import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import GetNews from './components/News/GetNews';
import IndonesiaPages from './components/Pages/IndonesiaPages';
import CovidPages from './components/Pages/CovidPages';
import Saved from './components/Saved';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetNews />} />
          <Route path="/indonesia" element={<IndonesiaPages />} />
          <Route path="/covid" element={<CovidPages />} />
          <Route path="/saved" element={<Saved />} />
          {/* <GetNews /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
