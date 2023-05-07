import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import GetNews from './components/News/GetNews';
import IndonesiaPages from './components/Pages/IndonesiaPages';
import CovidPages from './components/Pages/CovidPages';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetNews />} />
          <Route path="/indonesia" element={<GetNews topHeadlines={true} />} />
          <Route
            path="/covid"
            element={<GetNews topHeadlines={false} searchQuery={'covid'} />}
          />
          <Route
            path="/programming"
            element={
              <GetNews topHeadlines={false} searchQuery={'programming'} />
            }
          />
          {/* <GetNews /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
