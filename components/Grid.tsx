import { FC } from "react";
import { Movies } from "../types/movie";
import Thumbnail from "./Thumbnail";

const Grid: FC<Movies> = ({ page, results, total_pages, total_results }) => {
  return (
    <div>
      <Thumbnail />
      <h1>Movie Name</h1>
      <div>
        Data:
        {results.map((movie) => (
          <div key={movie?.id}>
            {movie.original_title}
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
