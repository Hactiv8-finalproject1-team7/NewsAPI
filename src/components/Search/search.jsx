import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

const baseUrl =
  'https://newsapi.org/v2/everything?q=Apple&from=2023-05-09&sortBy=popularity&apiKey=API_KEY';

function Search() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchBerita(text);
    }
  };

  const searchBerita = (text) => {
    console.log(text);
    setText(text);
    navigate(`/search/${text}`);
  };

  return (
    <div className="flex flex-row font-balto">
      <div>
        <input
          type="text"
          placeholder="Search here"
          className="p-1 bg-white-50 font-balto font-normal "
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <button
        onClick={() => searchBerita(text)}
        className="mx-4 bg-[#fff200] hover:opacity-50 p-1 font-semibold font-balto text-[.8em] rounded-md w-[5vw]"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
