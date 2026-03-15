import { createContext , useContext,useState,useEffect} from "react";
import UseMovie from "../hooks/UseMovie";
 const MovieContext = createContext()

export const ContextProvider = ({children})=>{
    const {movies} = UseMovie()
   
 const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
 const [favmovies, setfavmovies] = useState(()=>{
    try {
    const saved = localStorage.getItem("fav_movies");
    return saved && saved !== "undefined" ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("LocalStorage parse error:", error);
    return [];
  }
 })
 useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
     localStorage.setItem("fav_movies", JSON.stringify(favmovies));
  }, [theme,favmovies]);
 
 const toggleFavorite = (id) => {
   setfavmovies((prev)=>{
    if(prev.includes(id)){
      return prev.filter((movID)=> movID !== id)
    } else {
      return [...prev , id]
    }
   })
  };

  const value = {
    theme,
    setTheme,
    toggleTheme: () => setTheme(prev => prev === "light" ? "dark" : "light"),
    toggleFavorite,
    favmovies
  }
  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}

export const useGlobalContext =()=>{
    return useContext(MovieContext)
} 