import { FC } from "react";
import Link from "next/link";

import { Movies } from "../types/movie";
import Card from "./Card";

const Grid: FC<{ movies: Movies }> = ({ movies }) => {
  return (
    <div>
      <h1 className="text-5xl text-center sm:text-left font-semibold my-4">
        Popular Movies
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {movies?.results.map((movie, movieIndex) => (
          <Link key={movieIndex} href={movie?.id.toString()}>
            <a>
              <Card movie={movie} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Grid;
