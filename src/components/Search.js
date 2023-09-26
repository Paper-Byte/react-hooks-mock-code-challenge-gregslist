import React, { useState } from 'react';

function Search({ setSearchText }) {
  const [userSearch, setUserSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setSearchText(userSearch);
    setUserSearch('');
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        value={userSearch}
        placeholder="search free stuff"
        onChange={(e) => setUserSearch(e.target.value)}
      />
      <button type="submit" onSubmit={handleSubmit}>
        🔍
      </button>
    </form>
  );
}

export default Search;
