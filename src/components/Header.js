import React from 'react';
import Search from './Search';

function Header({ searchText, setSearchText, setIsSearched }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        setIsSearched={setIsSearched}
      />
    </header>
  );
}

export default Header;
