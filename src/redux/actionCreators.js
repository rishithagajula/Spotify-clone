import { ACTIONS } from "../redux/actions";

export const setHomeData = (data) => {
  return {
    type: ACTIONS.SET_HOME_DATA,
    payload: data,
  };
};

export const displayAlbumContent = (data) => {
  return {
    type: ACTIONS.SET_HOME_DATA,
    payload: data,
  };
};

export const setPlaylist = (data) => {
  return {
    type: ACTIONS.SET_PLAYLIST,
    payload: data,
  };
};

export const setArtist = (data) => {
  return {
    type: ACTIONS.SET_ARTIST,
    payload: data,
  };
};

export const setSearchQuery = (data) => {
  return {
    type: ACTIONS.SET_SEARCH_QUERY,
    payload: data,
  };
};
