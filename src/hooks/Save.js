import { useState, useEffect } from 'react';

export function useSavedNews() {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    const savedNewsJson = localStorage.getItem('myData');
    if (savedNewsJson !== null) {
      const parsedData = JSON.parse(savedNewsJson);
      if (Array.isArray(parsedData)) {
        setSavedNews(parsedData);
      } else {
        console.error(
          'Parsed data from local storage is not an array:',
          parsedData
        );
      }
    }
  }, []);

  return [savedNews, setSavedNews];
}
