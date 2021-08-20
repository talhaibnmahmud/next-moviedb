import Link from "next/link";
import { FC } from "react";

const Nav: FC = () => {
  return (
    <nav className="bg-purple-600 fixed top-0 z-20 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex sm:flex-row items-center justify-between py-2">
          <div className="">
            <h1 className="text-4xl text-transparent tracking-wider font-bold bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text">
              <Link href="/">
                <a>TMDB</a>
              </Link>
            </h1>
          </div>
          <div className="flex space-x-2 text-gray-200 font-semibold tracking-wide">
            <Link href="/upcoming">
              <a className="hover:underline hover:text-gray-50">Latest</a>
            </Link>
            <Link href="/now_playing">
              <a className="hover:underline hover:text-gray-50">Now Playing</a>
            </Link>
            <Link href="/top_rated">
              <a className="hover:underline hover:text-gray-50">Top Rated</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
