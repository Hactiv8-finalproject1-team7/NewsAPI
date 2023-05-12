import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import GetNews from './components/News/GetNews';
import SavedPages from './components/Pages/SavedPages';
import Search from './components/Search/search';
import SearchResults from './components/Search/SearchResults';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetNews />} />
          <Route
            path="/indonesia"
            element={<GetNews topHeadlines={true} searchQuery={'Indonesia'} />}
          />
          <Route
            path="/covid"
            element={<GetNews topHeadlines={false} searchQuery={'Covid'} />}
          />
          <Route
            path="/programming"
            element={
              <GetNews topHeadlines={false} searchQuery={'Programming'} />
            }
          />
          <Route path="/saved" element={<SavedPages />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
