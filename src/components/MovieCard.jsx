import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/MoviesContext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "motion/react";

const MovieCard = ({movie}) => {
  const {toggleFavorite,favmovies} = useGlobalContext()
   const isFavorite = favmovies?.some(fav => {
    if (typeof fav === 'object') return fav.id === movie.id;
    return fav === movie.id;
  }) || false;
  
 const {id,poster_path,title,release_date} = movie;
const IMG_PATH = "https://image.tmdb.org/t/p/original";
  return (
    <>
<NavLink to={`/movie/:${id}`}>
<motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }} // Halka sa upar uthna
      className="group relative bg-base-300 rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
    >
      {/* Poster Image with Zoom Effect */}
      <div className="relative overflow-hidden aspect-2/3">
        <motion.img 
          whileHover={{ scale: 1.1 }} // Image ke andar zoom
          transition={{ duration: 0.4 }}
          src={`${IMG_PATH}${poster_path}`} 
          alt={title} 
          className="w-full h-full object-cover"
           onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=600&fit=crop&auto=format';
                  }}
        />
        {/* add to favorite Overlay (Top Right) */}
         <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(movie.id);
        }}
        className="btn btn-circle btn-sm absolute top-4 right-4"
      >
        {isFavorite ? (
          <AiFillHeart className="text-red-600" />
        ) : (
          <AiOutlineHeart />
        )}
      </button>
      </div>

      {/* Movie Info */}
      <div className="p-4 bg-linear-to-t from-base-300 to-transparent">
        <h3 className="text-white font-semibold truncate group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-400">{release_date}</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
        </div>
      </div>
    </motion.div>
    </NavLink>
 </>
  )
};

export default MovieCard;
