import { ACTIONS } from "../redux/actions";

const initialState = {
  homeData: [],
  displayedAlbum: null,
  artist: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_HOME_DATA:
      return {
        ...state,
        homeData: action.payload,
      };
      case ACTIONS.DISPLAY_ALBUM_CONTENT:
      return {
        ...state,
        displayedAlbum: action.payload,
      }
    case ACTIONS.SET_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
      case ACTIONS.SET_ARTIST:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
