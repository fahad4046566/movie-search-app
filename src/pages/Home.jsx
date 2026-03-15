import { NavLink } from "react-router-dom";
import UseMovie from "../hooks/UseMovie";
import MovieCard from "../components/MovieCard"
import { GrLinkNext } from "react-icons/gr";
import TrendingHeading from "../components/TrendingHeading";
import Skelton from "../components/Skelton";
import { motion } from "motion/react";
import { CiPlay1 } from "react-icons/ci";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
const Home = () => {
const IMG_PATH = "https://image.tmdb.org/t/p/original";
const {loading,error,trendingMovies} = UseMovie()

const textVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, x: 50 }
};
  return <>
  {/* hero carousel  */}
 
  <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
   <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
       `url(${IMG_PATH}/6yeVcxFR0j08vlv2OlL6zbewm4D.jpg)`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <motion.h1
       variants={textVariants} initial="initial" animate="animate"
      className="mb-5 text-5xl font-bold">War Machine</motion.h1>
      <p className="mb-5">
       On one last grueling mission during Army Ranger training, a combat engineer must lead his unit in a fight against a giant otherworldly killing machine.
      </p>
      <NavLink to="/movies">
      <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" // Blue glow on hover
      }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-primary px-8 rounded-full border-none 
                 bg-linear-to-r from-blue-600 to-indigo-600 
                 text-white font-bold tracking-wide shadow-lg
                   group transition-all duration-300"
    >
      <CiPlay1 className="w-5 h-5 fill-current group-hover:animate-pulse" />
      <span>Explore More</span>
    </motion.button></NavLink>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
   <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
       `url(${IMG_PATH}/nHxWyy18SvAZ8jJeemtS8k1UNjM.jpg`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <motion.h1 
       variants={textVariants} initial="initial" animate="animate"
      className="mb-5 text-5xl font-bold">Shelter</motion.h1>
      <p className="mb-5">
    A man living in self-imposed exile on a remote island rescues a young girl from a violent storm, setting off a chain of events that forces him out of seclusion to protect her from enemies tied to his past.
      </p>
      <NavLink to="/movies"> <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" // Blue glow on hover
      }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-primary px-8 rounded-full border-none 
                 bg-linear-to-r from-blue-600 to-indigo-600 
                 text-white font-bold tracking-wide shadow-lg
                   group transition-all duration-300"
    >
      <CiPlay1 className="w-5 h-5 fill-current group-hover:animate-pulse" />
      <span>Explore More</span>
    </motion.button></NavLink>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
   <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
       `url(${IMG_PATH}/hYgUkH7TusddHRtelj53I6gFOWR.jpg`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <motion.h1 
       variants={textVariants} initial="initial" animate="animate"
      className="mb-5 text-5xl font-bold">The Bluff</motion.h1>
      <p className="mb-5">
      When her tranquil life on a remote island is shattered by the return of her vengeful former captain, a skilled ex-pirate must confront her bloody past and unleash her deadly talents to save her family from a ruthless siege.
      </p>
      <NavLink to="/movies"> <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" // Blue glow on hover
      }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-primary px-8 rounded-full border-none 
                 bg-linear-to-r from-blue-600 to-indigo-600 
                 text-white font-bold tracking-wide shadow-lg
                   group transition-all duration-300"
    >
      <CiPlay1 className="w-5 h-5 fill-current group-hover:animate-pulse" />
      <span>Explore More</span>
    </motion.button></NavLink>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
       `url(${IMG_PATH}/finq0JnC6tIMkKczzyxLJjgWFfT.jpg`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <motion.h1 
       variants={textVariants} initial="initial" animate="animate"
      className="mb-5 text-5xl font-bold">Whistle</motion.h1>
      <p className="mb-5">
      A misfit group of unwitting high school students stumble upon a cursed object, an ancient Aztec Death Whistle. They discover that blowing the whistle and the terrifying sound it emits will summon their future deaths to hunt them down.
      </p>
      <NavLink to="/movies"> <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" // Blue glow on hover
      }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-primary px-8 rounded-full border-none 
                 bg-linear-to-r from-blue-600 to-indigo-600 
                 text-white font-bold tracking-wide shadow-lg
                   group transition-all duration-300"
    >
      <CiPlay1 className="w-5 h-5 fill-current group-hover:animate-pulse" />
      <span>Explore More</span>
    </motion.button></NavLink>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
{/* trending heading  */}
<TrendingHeading title={`Trending Movies`} icon={FaMoneyBillTrendUp}/>

{/* trending movies  */}
  {loading && <div className="text-4xl text-center"><Skelton/></div>}
  {error && <div>Error is {error}</div>}
   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
  {trendingMovies.map((movie)=>{
    return( <MovieCard movie={movie} key={movie.id}/>)
  })}
  </div>
  <div className="flex items-center justify-center pt-8">
   <NavLink to="/movies">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="hover:cursor-pointer group relative inline-flex items-center justify-center px-8 py-3 
               font-bold text-white transition-all duration-300 
               bg-primary rounded-xl hover:bg-primary-focus 
               shadow-[0_0_20px_rgba(var(--p),0.3)] hover:shadow-primary/60"
  >
    <span className="flex items-center gap-2">
      Explore More
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <GrLinkNext className="text-xl group-hover:translate-x-1 transition-transform" />
      </motion.span>
    </span>
  </motion.button>
</NavLink>
  </div>
  </>;
};

export default Home;
