import React, { useEffect } from "react";
import "./Home.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { setHomeData, displayAlbumContent } from "../redux/actionCreators";

const Home = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.Home.homeData);

  useEffect(() => {
    const apiUrl =
      "https://spotify23.p.rapidapi.com/concert/?id=6PodeS6Nvq7AwacfxsxHKT";

    fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": "9909dd9333msh6c9b83114dd3a1bp1b067bjsn15ad6b731df4",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        const albumsList = data.albums || [];
        console.log("Albums List:", albumsList);

        dispatch(setHomeData(albumsList));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  const handleClick = (album) => {
    dispatch(displayAlbumContent(album));
  };

  return (
    <>
      <div className="album-container">
        <h1 className="word">ALBUMS</h1>
        <div className="album">
          {homeData && homeData.length > 0 ? (
            homeData.map((album, index) => (
              <div
                key={index}
                className="album-item"
                onClick={() => handleClick(album)}
              >
                <div className="album-image">
                  {album.imageUri && (
                    <a
                      href={album.imageUri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="album-img"
                        src={album.imageUri}
                        alt={album.name}
                      />
                    </a>
                  )}
                </div>
                <div className="album-content">
                  <h3 className="album-name">{album.name}</h3>
                  <h4 className="album-name2">{album.artistName}</h4>
                </div>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  homeData: state.Home.homeData,
});

export default connect(mapStateToProps, { setHomeData })(Home);
