import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const baseUrl =
  'https://newsapi.org/v2/everything?q=Apple&from=2023-05-09&sortBy=popularity&apiKey=API_KEY';

function Search() {
  const [text, setText] = useState('');
  async function searchBerita() {
    try {
      const response = await window.fetch(`${baseUrl}?=berita`);
      const data = await response.json();
      console.log('d', data);
    } catch (e) {
      console.Console(e);
    }
  }

  return (
    <div className="flex flex-row font-balto">
      <div>
        <input
          type="text"
          placeholder="Search here"
          className="p-1 bg-white-50"
          velue={text}
        />
      </div>
      <button onClick={searchBerita} className="mx-4">
        Search
      </button>
    </div>
  );
}

export default Search;
