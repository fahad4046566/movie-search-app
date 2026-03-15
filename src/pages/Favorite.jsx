import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/MoviesContext";
import { movieDetail } from "../services/API";
import MovieCard from "../components/MovieCard";
import Skelton from "../components/Skelton";
import TrendingHeading from "../components/TrendingHeading";
import { MdOutlineFavorite } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
const Favorite = () => {
  const { favmovies } = useGlobalContext();
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const loadMovie = async () => {
      setloading(true);
      const result = await Promise.all(favmovies.map((id) => movieDetail(id)));
      setmovies(result);
      setloading(false);
    };
    loadMovie();
  }, [favmovies]);

  return (
   <>
  <div>
    {movies.length > 0 && (
      <TrendingHeading title={`Favorite Movies`} icon={MdOutlineFavorite} />
    )}
  </div>

  <div className="flex flex-col justify-center items-center min-h-[70vh]">
    {loading ? (
      <div className="text-4xl text-center w-full">
        <Skelton />
      </div>
    ) : movies && movies.length > 0 ? (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={`${movie.id}-${index}`} />
        ))}
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center text-center px-4">
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full" />
          <div className="relative bg-base-200 p-8 rounded-full border border-white/5 shadow-2xl">
            <IoHeartOutline className="text-7xl text-primary opacity-80" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3 uppercase">
            Your Collection is <span className="text-primary">Empty</span>
          </h2>
          <p className="text-base-content/60 max-w-sm mx-auto mb-8 font-medium">
            Start building your personal library by clicking the heart icon on your favorite movies.
          </p>

          <NavLink to="/movies">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary px-10 rounded-full font-bold shadow-lg shadow-primary/20"
            >
              Browse Movies
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    )}
  </div>
</>
  );
};

export default Favorite;
