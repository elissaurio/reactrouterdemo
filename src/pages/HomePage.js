import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = '';
const API_URL = 'https://newsapi.org/v2';

const HomePage = () => {
  const [sources, setSources] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${API_URL}/sources?language=es`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    }).then(response => {
      setSources(response.data.sources);
    });
  }, []);
  
  return (
    <>
      <h1>News Sources</h1>
      <div className="py-5">
        <div className="grid grid-cols-2 gap-4">
          {sources.map(source => <div className="bg-white p-4" key={source.id}>
            <Link className="font-bold" to={`/source?id=${source.id}`}>{source.name}</Link>
            <p className="text-xs">{source.description}</p>
            <div className="grid grid-cols-3 pt-4 text-xs text-gray-600">
              <span>{source.category}</span>
              <span>{source.language}</span>
              <span>{source.country}</span>
            </div>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default HomePage;
