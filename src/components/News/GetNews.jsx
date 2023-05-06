import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from './News';

function GetNews({ topHeadlines, searchQuery }) {
  const [news, setNews] = useState([]);

  const apiKey = 'dad6f372dd224606a322e57de28209f0';
  const apiUrl = topHeadlines
    ? `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`
    : `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNews(response.data.articles);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiUrl]);

  return (
    <div className="grid grid-cols-3 gap-4 w-screen mx-auto max-w-[1440px]">
      {news.slice(0, 9).map((news) => (
        <News news={news} key={news.url} />
      ))}
    </div>
  );
}

export default GetNews;
