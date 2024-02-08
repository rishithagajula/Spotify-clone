import React, { useState } from "react";
import "./ParentComponent.css";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/actionCreators";

const ParentComponent = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Home.loading);
  const [searchQueryValue, setSearchQueryValue] = useState("");
  const [albums, setAlbums] = useState([]);

  const handleSearch = () => {
    const apiUrl = `https://spotify23.p.rapidapi.com/search/?q=${searchQueryValue}&type=multi&offset=0&limit=10&numberOfTopResults=5`;

    fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": "9909dd9333msh6c9b83114dd3a1bp1b067bjsn15ad6b731df4",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        const albumsList = data && data.albums ? data.albums.items : [];
        setAlbums(albumsList);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search artist..."
              value={searchQueryValue}
              onChange={(e) => setSearchQueryValue(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </header>
        <main>
          <Search albums={albums} />
        </main>
      </div>
    </div>
  );
};

export default ParentComponent;