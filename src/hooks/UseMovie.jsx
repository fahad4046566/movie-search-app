import { searchMovie, fetchMoviesPopular } from "../services/API";
import { useReducer,useEffect } from "react";
import { reducer, initialState, ACTIONS } from "../reducers/MovieReducer";

const UseMovie = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: ACTIONS.FETCH_START });
        let result;
        if (state.searchquery) {
          result = await searchMovie(state.searchquery);
        } else {
          result = await fetchMoviesPopular(state.page);
        }
        dispatch({type:ACTIONS.FETCH_SUCSESS , payload:result})
      } catch (error) {
        dispatch({type:ACTIONS.FETCH_ERROR , payload:error })
      }
    };

    fetchData();
  }, [state.searchquery,state.page]);

  const setSearch = (query) => {
    dispatch({ type: ACTIONS.SET_SEARCH, payload: query });
  };
   const loadMore = () => {
    if (!state.loading && state.hasMore) {
      dispatch({ type: ACTIONS.LOAD_MORE });
    }
  };

  return{
    movies:state.movies,
    trendingMovies:state.trendingMovies,
    loading:state.loading,
    error:state.error,
    hasMore: state.hasMore,
    loadMore,
    setSearch,
  }

};

export default UseMovie;
