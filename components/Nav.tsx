import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-green-400 to bg-indigo-400 bg-clip-text">
              TMDB
            </h1>
          </div>
          <div>
            <input
              type="text"
              id="search"
              className="px-5 py-2 w-80 rounded-l-full focus:outline-none"
            />
            <label className="sr-only">Search Movie</label>
            <button
              type="submit"
              className="px-2 py-2 text-md font-semibold bg-gradient-to-r from-green-400 to bg-indigo-400 rounded-r-full focus:outline-none"
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
