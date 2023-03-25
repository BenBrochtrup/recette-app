import React, { useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleScrapeClick = async () => {
    const response = await axios.get(`http://localhost:3030/recette/AllRecipes?link=${query}`);
    console.log(response.data);
  };

  return (
    <div className="container">
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Link..."
          value={query}
          onChange={handleQueryChange}
        />
        <button className="scrape-btn" onClick={handleScrapeClick}>
          Scrape
        </button>
      </div>
    </div>
  );
}

export default App;
