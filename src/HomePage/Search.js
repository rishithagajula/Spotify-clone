import React from "react";
import "./Search.css";

const Search = ({ albums }) => {
  return (
    <div className="search-container">
      {albums.length > 0 && <h2 className="name">ALBUMS</h2>}
      <div className="search">
        {albums.map((album, index) => (
          <div key={index} className="search-item">
            <div className="search-image">
              {album.coverArt && album.coverArt.sources && album.coverArt.sources[0] && (
                <img className="img1" src={album.coverArt.sources[0].url} alt="album" />
              )}
            </div>
            <div className="search-content">
              <h4 className="search-name">{album.data.name}</h4>
              {album.data.artists && album.data.artists.items && album.data.artists.items[0] && (
                <p className="search-type">Artist: {album.data.artists.items[0].profile.name}</p>
              )}
              <br />
              <p className="search-id">URI: {album.data.uri}</p> <br />
              {album.data.date && <p className="search-year">Year: {album.data.date.year}</p>}
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;