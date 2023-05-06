import React from 'react'

function News({ news }) {
  return (
    <div className="flex flex-col h-[33vh] flex-wrap p-4 items-center ">
      <div className="bg-white border-2 p-2">
        <div key={news.title} className="text-2xl font-semibold">
          <h4 className="text-sm">
            {news.author} <span className="">-</span> {news.source.name}
          </h4>
          <h3>{news.title}</h3>
          {news.description ? (
            <p>{news.description}</p>
          ) : (
            <p className="text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ut turpis quis orci rhoncus tincidunt in eu velit. Aliquam dictum
              porta nisi quis molestie. Suspendisse eleifend quam mi, ac
              pharetra nunc ullamcorper sit amet.{' '}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
