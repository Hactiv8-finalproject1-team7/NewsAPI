import React, { useEffect } from 'react';
import { useSavedNews } from '../Save';

function News({ news }) {
  const dateStr = news.publishedAt;
  const date = new Date(dateStr);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const [savedNews, isSaved] = useSavedNews();

  const saveToLocalStorage = (news) => {
    if (typeof window !== 'undefined') {
      // Get existing data from localStorage
      const existingData = localStorage.getItem('myData');

      // If there's existing data, parse it into an array; otherwise, create an empty array
      const savedNews = existingData ? JSON.parse(existingData) : [];

      // Check if the news item is already in the saved news array
      const isDuplicate = savedNews.some(
        (item) => item.title === news.title || item.url === news.url
      );

      // If the news item is not a duplicate, add it to the array
      if (!isDuplicate) {
        savedNews.push(news);
        // Save the updated array back to localStorage
        localStorage.setItem('myData', JSON.stringify(savedNews));
      }
    }
  };

  useEffect(() => {
    // Call the forceUpdate function to re-render the component
  }, [savedNews]);

  const newsHandler = () => {
    window.open(news.url, '_blank');
  };

  return (
    <div className="flex flex-col h-auto flex-wrap p-2 items-center border-b-2">
      <div className="bg-white p-2">
        <div key={news.title} className="text-2xl font-balto font-semibold">
          {news.urlToImage ? (
            <img
              src={news.urlToImage}
              alt="news"
              className="mt-2 mx-auto h-[5em]"
            />
          ) : null}
          <h2 className="font-balto leading-6 text-[.8em]">{news.title}</h2>
          {/* <p className="text-[.35em] leading-5 font-balto font-normal">
            {formattedDate}
          </p> */}
          {news.description ? (
            <p className="text-[.5em] leading-5 font-balto font-normal">
              {news.description}
            </p>
          ) : (
            <p className="text-[.5em] font-balto font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ut turpis quis orci rhoncus tincidunt in eu velit. Aliquam dictum
              porta nisi quis molestie. Suspendisse eleifend quam mi, ac
              pharetra nunc ullamcorper sit amet.{' '}
            </p>
          )}
          <h4 className="font-balto leading-5 font-semibold text-[.4em]">
            {news.author} <span className="">-</span> {news.source.name}
          </h4>
          <div className="flex flex-row">
            <button
              onClick={newsHandler}
              className="p-3 bg-slate-500 text-[.5em] h-[2em] flex items-center font-balto rounded-md text-white hover:opacity-70"
            >
              News Page
            </button>
            <button
              onClick={() => saveToLocalStorage(news)}
              className={`p-3 mx-2 text-[.5em] h-[2em] flex items-center font-balto rounded-md text-white hover:opacity-70 
              ${
                savedNews.some(
                  (savedNewsItem) => savedNewsItem.title === news.title
                )
                  ? 'bg-green-500' // change to green if saved
                  : 'bg-[#ccc537de]' // default color
              }`}
            >
              {savedNews.some(
                (savedNewsItem) => savedNewsItem.title === news.title
              )
                ? 'Saved'
                : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
