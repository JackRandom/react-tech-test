import React, { useState } from 'react';
import '../styles/App.css';
import Search from './Search.js';
import SearchResults from './SearchResults.js';

function App() {
  const [searchResults, setSearchResults] = useState();
  searchResults.map((e) => console.log(e))
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults}/>
      <SearchResults />
    </div>
  );
}

export default App;
