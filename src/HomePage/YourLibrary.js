import React, { useEffect } from "react";
import "./YourLibrary.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { setArtist } from "../redux/actionCreators";

const YourLibrary = ({ artist }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Home.loading);

  useEffect(() => {
    const apiUrl =
      "https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8";

    fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": "109b56f774msh9334e372bf2eec6p1aa509jsn3d1c464829a4",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        const artistsArray = data.artists || [];
        console.log("Artists List:", artistsArray);

        dispatch(setArtist(artistsArray));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="artist-container">
      <h1 className="word1">ARTISTS</h1>
      {artist && artist.length > 0 ? (
        artist.map((artist, index) => (
          <div key={index} className="artist-item">
            <div className="artist-image">
              {artist.images && artist.images.length > 0 && (
                <img
                  className="artist-img"
                  src={artist.images[0].url}
                  alt="artist"
                />
              )}
            </div>
            <div className="artist-content">
              <p className="artist-name">{artist.name}</p>
              <div className="artist-info">
                <p className="artist-type">{artist.type}</p>
                <p className="artist-popularity">
                  Popularity: {artist.popularity}
                </p>
                <p className="artist-followers">
                  Followers: {artist.followers.total}
                </p>
                <div className="artist-genres">
                  Genres:
                  <ul>
                    {artist.genres &&
                      artist.genres.map((genre, genreIndex) => (
                        <li key={genreIndex}>{genre}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No artists found.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  artist: state.Home.artist,
});

export default connect(mapStateToProps)(YourLibrary);
