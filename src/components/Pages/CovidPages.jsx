import GetNews from '../News/GetNews';

function CovidPages() {
  return <GetNews topHeadlines={false} searchQuery={'Covid'} />;
}

export default CovidPages;
