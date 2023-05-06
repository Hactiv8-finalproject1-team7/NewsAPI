function News({ news }) {
  const dateStr = news.publishedAt;
  const date = new Date(dateStr);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className="flex flex-col h-[33vh] flex-wrap p-4 items-center ">
      <div className="bg-white border-2 p-2">
        <div key={news.title} className="text-2xl font-semibold">
          <h4 className="text-sm">
            {news.author} <span className="">-</span> {news.source.name}
          </h4>
          <h3>{news.title}</h3>
          <h4 className="text-sm">{formattedDate}</h4>
          {news.description ? (
            <p className="text-lg font-normal">{news.description}</p>
          ) : (
            <p className="text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ut turpis quis orci rhoncus tincidunt in eu velit. Aliquam dictum
              porta nisi quis molestie. Suspendisse eleifend quam mi, ac
              pharetra nunc ullamcorper sit amet.{' '}
            </p>
          )}
          <button className="p-2 bg-slate-500 rounded-lg text-white">
            News Page
          </button>
          <button className="p-2 bg-slate-500 mx-2  rounded-lg text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
