import React, { useState, useEffect } from 'react';
import { useSavedNews } from '../Save';

function SavedPages() {
  const [savedNews, setSavedNews] = useSavedNews();

  const deleteHandler = (news) => {
    console.log(news);
    const index = savedNews.findIndex(
      (item) => item.title === news.title || item.url === news.url
    );
    savedNews.splice(index, 1);
    localStorage.setItem('myData', JSON.stringify(savedNews));
    setSavedNews(savedNews);
    window.location.reload();
  };

  if (savedNews.length === 0) {
    return (
      <div className=" flex flex-col items-center my-auto justify-center mx-auto py-12 px-4 md:px-8 lg:px-12 xl:px-14 max-w-[1080px]">
        <h1 className="text-3xl mt-6">No Saved News</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto py-12 px-4 md:px-8 lg:px-12 xl:px-14 max-w-[1080px]">
      <div className="mt-6 border-b-4 border-[#fff200] ">
        <h1 className="text-3xl text-center font-balto font-semibold">
          Saved News
        </h1>
      </div>
      <table className="table-auto">
        <thead>
          <tr className="border-b-4 border-[#fff200] h-8">
            <th>Source</th>
            <th>Title</th>
            <th>Description</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {savedNews.map((savedNewsItem, index) => (
            <tr
              key={index}
              className={`font-balto ${index % 2 === 0 ? 'bg-[#faf8f8]' : ''}`}
            >
              <td className=" ">
                <div className="p-2 text-[.7em]">
                  <h2 className="">{savedNewsItem.source.name}</h2>
                  <h2 className="">{savedNewsItem.author}</h2>
                  <a
                    href={savedNewsItem.url}
                    target="_blank"
                    className="text-blue-700"
                  >
                    Read More
                  </a>
                </div>
              </td>
              <td className="w-[20vw] p-2 text-[.8em] font-medium">
                {savedNewsItem.title}
              </td>
              <td className="w-[30vw] p-2 text-[.8em]">
                {savedNewsItem.description}
              </td>
              <td className="w-[2vw] text-[1em] text-red-500 text-center hover:opacity-50">
                <button onClick={() => deleteHandler(savedNewsItem)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SavedPages;
