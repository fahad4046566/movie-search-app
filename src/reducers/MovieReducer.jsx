
export const initialState = {
  movies: [],
  trendingMovies:[],
  loading: false,
  error: null,
   page: 1,
  hasMore: true,
  searchquery:""
};

export const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCSESS: "FETCH_SUCSESS",
  FETCH_ERROR: "FETCH_ERROR",
  SET_SEARCH:"SET_SEARCH",
  LOAD_MORE: "LOAD_MORE"
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null, 
      };
    case ACTIONS.FETCH_SUCSESS:
        let trending = action.payload.filter((currElem)=> currElem.popularity > 170)
     
      return {
        ...state,
        loading: false,
        // movies:action.payload,
        movies:state.page === 1 ? action.payload :[...state.movies , ...action.payload],
        hasMore : action.payload.length > 0,
        trendingMovies:trending,

      };  
         case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload, 
      };  
      case ACTIONS.SET_SEARCH:
      return {
        ...initialState,
       searchquery:action.payload
      };  
      case ACTIONS.LOAD_MORE:
      return { ...state, page: state.page + 1 };
    default:
      return {
        ...state,
      }  
  }
};
