import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav className="bg-purple-600 fixed top-0 z-20 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3">
          <div className="pb-2 sm:pb-0">
            <h1 className="text-4xl text-transparent tracking-wider font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text">
              TMDB
            </h1>
          </div>
          <div className="pb-2 sm:pb-0">
            <input
              type="text"
              id="search"
              placeholder="Search for movies..."
              className="px-5 py-2 w-80 rounded-l-full focus:outline-none"
            />
            <label className="sr-only">Search Movie</label>
            <button
              type="submit"
              className="px-2 py-2 text-md font-semibold bg-gradient-to-r from-green-400 to-purple-400 rounded-r-full focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
