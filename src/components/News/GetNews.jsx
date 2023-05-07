import React, { useState, useEffect } from 'react';
import axios from 'axios';
import News from './News';

function GetNews({ topHeadlines, searchQuery }) {
  const [news, setNews] = useState([]);

  const apiKey = 'dad6f372dd224606a322e57de28209f0';
  const today = new Date().toISOString().split('T')[0]; // Get today's date in the format "YYYY-MM-DD"
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  const oneMonthAgoString = oneMonthAgo.toISOString().split('T')[0]; // Get the date 1 month ago in the format "YYYY-MM-DD"
  const apiUrl = topHeadlines
    ? `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`
    : `https://newsapi.org/v2/everything?q=${searchQuery}&from=${oneMonthAgoString}&to=${today}&apiKey=${apiKey}`;

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
    <div className="flex flex-col items-center">
      <div className="mt-[5vh]">
        <h1 className="text-2xl font-semibold">News</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 w-screen mx-auto max-w-[1440px]">
        {news.slice(0, 9).map((news) => (
          <News news={news} key={news.url} />
        ))}
      </div>
    </div>
  );
}

export default GetNews;
