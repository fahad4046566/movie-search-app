import { motion } from "framer-motion";

const Search = ({ query, setquery }) => {
  return (
    <div className="relative w-full min-h-[50vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="text-center mb-10 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Search. Explore. <span className="text-primary">Watch.</span>
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Discover thousands of movies and TV shows with just one click.
        </p>
      </div>
      <div className="flex justify-center items-center w-full max-w-2xl mx-auto">
        <label
          className="input input-bordered flex items-center gap-3 h-14 px-5 
               bg-base-100/50 backdrop-blur-sm shadow-xl shadow-blue-900/20
               hover:shadow-blue-800/30 focus-within:shadow-blue-800/40 
               focus-within:border-primary transition-all duration-500 
               rounded-2xl border-2"
        >
          {/* Search Icon */}
          <motion.svg
            whileHover={{ scale: 1.2, color: "var(--p)" }}
            className="h-5 w-5 opacity-60 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </motion.svg>

          <input
            className="grow text-lg font-medium bg-transparent focus:outline-none text-center pr-8"
            type="search"
            value={query}
            onChange={(e) => setquery(e.target.value)}
            required
            placeholder="Search Movie Here"
          />

          <kbd className="kbd kbd-sm hidden sm:inline-flex opacity-50 shrink-0">
            ⌘K
          </kbd>
        </label>
      </div>
    </div>
  );
};

export default Search;
