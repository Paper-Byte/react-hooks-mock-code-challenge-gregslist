import React, { useState } from 'react';

function ListingCard({ listing, setAllListings }) {
  const [favorite, setFavorite] = useState(false);

  const updateListingListAfterDelete = async () => {
    try {
      await fetch(`http://localhost:6001/listings/${listing.id}`, {
        method: 'DELETE',
      });
      setAllListings((prevState) =>
        prevState.filter((e) => e.id !== listing.id)
      );
    } catch (error) {
      console.error(`Error :${error}`);
    }
  };
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={() => setFavorite(false)}
          >
            ★
          </button>
        ) : (
          <button
            className="emoji-button favorite"
            onClick={() => setFavorite(true)}
          >
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
          className="emoji-button delete"
          onClick={updateListingListAfterDelete}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
