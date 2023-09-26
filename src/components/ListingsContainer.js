import React from 'react';
import ListingCard from './ListingCard';

function ListingsContainer({ itemsToDisplay, setAllListings }) {
  return (
    <main>
      <ul className="cards">
        {itemsToDisplay.map((e) => (
          <ListingCard
            listing={e}
            setAllListings={setAllListings}
            key={e.id}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
