import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export const fetchMoviesPopular = async(page = 1) => {
  try {
    const resp1 = await axios.get(`${baseUrl}/movie/popular?api_key=${API_KEY}&page=${page}`)
    return resp1.data.results;
  } catch (error) {
    console.log(`fetching error is ${error}`)
    throw error;
  }
}

export const searchMovie = async(query) => {
   if (!query) return []; 
   try {
    const resp1 = await axios.get(`${baseUrl}/search/movie?api_key=${API_KEY}&query=${query}`)
    return resp1.data.results || [];
  } catch (error) {
    console.log(`searching error is ${error}`)
  return []
  }
}
export const movieDetail = async (id) => {
    const cleanId = id.toString().replace(':', '').trim();
   try {
    const resp1 = await axios.get(`${baseUrl}/movie/${cleanId}?api_key=${API_KEY}`)
    return resp1.data;
  } catch (error) {
    console.log(`Detail error is ${error}`)
    throw  error;
  }
}






