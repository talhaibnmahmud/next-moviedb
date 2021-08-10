import { FC } from "react";
import { Movies } from "../types/movie";
import Thumbnail from "./Thumbnail";

const Grid: FC<Movies> = ({ page, results, total_pages, total_results }) => {
  return (
    <div>
      <h1 className="text-5xl text-center sm:text-left font-semibold my-4">
        Popular Movies
      </h1>

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
        {results.map((movie) => (
          <div key={movie?.id}>
            <Thumbnail movie={movie} />
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
