//react
import { useReducer } from "react";

//axios
import axios from "axios";

//context
import ShowsContext from "./showsContext";

//reducer
import ShowsReducer from "./showsReducer";

//types
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const defaultShows = async () => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=robots`
    );
    dispatch({ type: SEARCH_SHOWS, payload: data });
  };

  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    dispatch({ type: SEARCH_SHOWS, payload: data });
  };

  const getSimgleShow = async (id) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

    dispatch({ type: SET_SINGLE_SHOW, payload: data });
  };

  const clearSingleShow = () => {
    dispatch({ type: CLEAR_SINGLE_SHOW });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSimgleShow,
        clearSingleShow,
        defaultShows,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
