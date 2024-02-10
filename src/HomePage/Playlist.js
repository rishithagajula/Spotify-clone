import React, { useEffect } from "react";
import "./Playlist.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../redux/actionCreators";

const Playlist = ({ playlist }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.Home.loading);

  useEffect(() => {
    const apiUrl =
      "https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=20";

    fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": "9909dd9333msh6c9b83114dd3a1bp1b067bjsn15ad6b731df4",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        dispatch(setPlaylist(data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="playlist-container">
      <h1 className="word2">PLAYLISTS</h1>
      {playlist && playlist.items && playlist.items.length > 0 ? (
        <div>
          <ul>
            {playlist.items.map((item, index) => (
              <li key={index}>
                <div>
                  <h4>{item.track.name}</h4>
                  <p>Album: {item.track.album.name}</p>
                  <p>Album Type: {item.track.album.album_type}</p>
                  {item.track.album.images &&
                    item.track.album.images.length > 0 && (
                      <img
                        src={item.track.album.images[0].url}
                        alt="album cover"
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                  <p>Total Tracks: {item.track.album.total_tracks}</p>
                  <p>Type: {item.track.type}</p>
                  <p>URI: {item.track.uri}</p>
                  <div>
                    <h5>Artists:</h5>
                    <ul>
                      {item.track.artists &&
                        item.track.artists.length > 0 &&
                        item.track.artists.map((artist, index) => (
                          <li key={index}>
                            <p>ID: {artist.id}</p>
                            <p>Name: {artist.name}</p>
                            <p>Type: {artist.type}</p>
                            <p>URI: {artist.uri}</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No tracks found.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  playlist: state.Home.playlist,
});

export default connect(mapStateToProps)(Playlist);
