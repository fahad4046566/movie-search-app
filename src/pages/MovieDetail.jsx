import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import DetailPgeSkelton from "../components/DetailPgeSkelton";
import { movieDetail } from "../services/API";
import { motion } from "framer-motion";
import StatItem from "../components/StatItem";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
const MovieDetail = () => {
  const { id } = useParams();
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const loadMovie = async () => {
      setloading(true);
      const singleMovie = await movieDetail(id);
      setmovies(singleMovie);
      setloading(false);
    };
    loadMovie();
  }, [id]);
  const {
    backdrop_path,
    production_companies,
    spoken_languages,
    revenue,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    budget,
    homepage,
  } = movies;
  if (loading || !movies)  return <DetailPgeSkelton/>
  return (
    <>
      <div className="movie-details-page">
        {/* Hero Section */}

        <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            className="absolute inset-0 w-full h-full object-cover"
             onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=600&fit=crop&auto=format';
                  }}
          />

          <div className="absolute inset-0 bg-linear-to-t from-base-100 via-base-100/60 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-base-100 via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="container mx-auto flex flex-col md:flex-row gap-8 items-end">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden md:block w-64 shrink-0 shadow-2xl rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  className="w-full"
                   onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=600&fit=crop&auto=format';
                  }}
                />
              </motion.div>

              {/* Movie Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 space-y-4"
              >
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white">
                  {title}
                </h1>
                <div className="flex items-center gap-4 text-sm md:text-lg font-medium text-gray-300">
                  <span className="flex items-center gap-1 text-yellow-400 font-bold">
                    ⭐ {vote_average?.toFixed(1)}
                  </span>
                  <span>•</span>
                  <span>{release_date?.split("-")[0]}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 border border-white/20 rounded-md uppercase text-xs">
                    {status}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <section>
              {overview &&   <h2 className="text-2xl font-bold mb-4 border-l-4 border-primary pl-4">
                Overview
              </h2>}
            
              <p className="text-lg leading-relaxed text-base-content/80 font-medium">
                {overview}
              </p>
            </section>

            <section>
              {production_companies && <h2 className="text-xl font-bold mb-6 text-base-content/60">
                Produced By
              </h2>}
              <div className="flex flex-wrap gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
                { production_companies?.map(
                  (company) =>
                    company.logo_path && (
                      <img
                        key={company.id}
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        className="h-8 md:h-12 object-contain"
                      />
                    ),
                )}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-base-200/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 italic">Movie Facts</h3>
              <div className="space-y-6">
                <StatItem label="Budget" value={`$${budget}`} />
                <StatItem
                  label="Revenue"
                  value={`$${revenue}`}
                  isGreen
                />
                <StatItem
                  label="Original Language"
                  value={spoken_languages?.[0]?.english_name}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <NavLink to="/movies">
            <motion.button
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline border-white/20 hover:bg-white/10 text-white rounded-xl gap-2 backdrop-blur-md px-6"
            >
              <IoMdArrowRoundBack className="text-xl" />
              <span className="font-semibold">Back to Explore</span>
            </motion.button>
          </NavLink>

          {homepage && (
            <motion.a
              href={homepage}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/20 flex items-center gap-2 group">
                <span className="font-bold uppercase tracking-tight">
                  Visit Official Site
                </span>
                <IoMdArrowRoundForward className="text-xl group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.a>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
