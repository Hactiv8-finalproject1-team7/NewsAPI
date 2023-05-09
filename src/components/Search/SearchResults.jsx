import { useParams } from 'react-router-dom';
import GetNews from '../News/GetNews';

function SearchResults() {
  const { query } = useParams();

  return (
    <div>
      <GetNews topHeadlines={false} searchQuery={query} />
    </div>
  );
}

export default SearchResults;
