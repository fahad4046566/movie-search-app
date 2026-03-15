import UseMovie from "../hooks/UseMovie";
import MovieCard from "../components/MovieCard";
import TrendingHeading from "../components/TrendingHeading";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import UseDebounce from "../hooks/UseDebounce";
import { MdSearch } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import Skelton from "../components/Skelton";
import { GiFilmProjector } from "react-icons/gi";
const Movies = () => {
  const { loading, error, movies,setSearch ,loadMore,hasMore} = UseMovie();
  const [query, setquery] = useState("")
 const debouncedSearch = UseDebounce(query,500)
 
 useEffect(() => {
  setSearch(debouncedSearch)
 }, [debouncedSearch])
 

  return (
    <div>
       <Search query={query} setquery={setquery}/>
       <div>{movies.length > 0 && <TrendingHeading title={`All Movies`}  icon={GiFilmProjector}/>}</div>
      
      {/* {movies.length === 0 && <div className="text-2xl md:text-4xl text-center m-30 md:m-42 flex justify-center items-center gap-4"><MdSearch />No Movies Found</div>} */}
       {!loading &&  movies.length === 0 && (
    <div className="text-2xl md:text-4xl text-center m-30 md:m-42 flex justify-center items-center gap-4">
      <MdSearch /> No Movies Found
    </div>
  )}
      {loading && movies.length === 0 && <div className="text-4xl text-center"> <Skelton/></div>}
      {error && <div>Error is {error}</div>}
      <InfiniteScroll hasMore={hasMore} dataLength={movies.length} next={loadMore} loader={ <Skelton/> } className="overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {movies.map((movie,index) => {
          return <MovieCard movie={movie} key={`${movie.id}-${index}`} />;
        })}
      </div>
      </InfiniteScroll>
    </div>
  );
};

export default Movies;
