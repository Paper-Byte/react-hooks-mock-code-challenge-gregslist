import React from 'react';
import Search from './Search';

function Header({ setSearchText }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchText={setSearchText} />
    </header>
  );
}

export default Header;
