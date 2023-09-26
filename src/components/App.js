import React, { useState, useEffect } from 'react';
import Header from './Header';
import ListingsContainer from './ListingsContainer';

function App() {
  const [allListings, setAllListings] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('http://localhost:6001/listings');
        const data = await resp.json();
        setAllListings([...data]);
      } catch (error) {
        console.error(`Error : ${error}`);
      }
    };
    fetchData();
  }, []);

  const itemsToDisplay = allListings.filter((listing) =>
    isSearched ? listing.description.includes(searchText) : listing
  );

  console.log(itemsToDisplay);

  return (
    <div className="app">
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        setIsSearched={setIsSearched}
      />
      <ListingsContainer
        setAllListings={setAllListings}
        itemsToDisplay={itemsToDisplay}
      />
    </div>
  );
}

export default App;
