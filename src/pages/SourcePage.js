import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const API_KEY = '';
const API_URL = 'https://newsapi.org/v2';

const SourcePage = () => {
  const [articles, setArticles] = React.useState([]);

  const query = new URLSearchParams(useLocation().search);

  React.useEffect(() => {
    console.log(query.get('id'));
    axios.get(`${API_URL}/top-headlines?sources=${query.get('id')}&language=es`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    }).then(response => {
      setArticles(response.data.articles);
    });
  }, []);

  return (
    <>
      <h1>Latests News</h1>
      <div className="py-5">
        <div className="grid grid-cols-2 gap-4">
          {articles.map((article, index) => <div key={index}>
            <div className="bg-white rounded grid grid-cols-3 p-4">
              <div className="relative w-24 col-span-1 overflow-hidden">
                <a href={article.url}>
                  <img className="absolute object-cover" src={article.urlToImage} />
                </a>
              </div>
              <div className="col-span-2">
                <a className="font-bold" href={article.url}>{article.title}</a>
                <span className="block text-gray-600">{article.author}</span>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default SourcePage;
