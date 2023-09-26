import React from 'react';

function Search({ searchText, setSearchText, setIsSearched }) {
  function handleSubmit(e) {
    e.preventDefault();
    setIsSearched(true);
  }

  console.log(searchText);
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        value={searchText}
        placeholder="search free stuff"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" onSubmit={handleSubmit}>
        🔍
      </button>
    </form>
  );
}

export default Search;
