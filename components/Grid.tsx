import { FC, useEffect, useRef } from "react";
import { Movies } from "../types/movie";
import Thumbnail from "./Thumbnail";

const Grid: FC<Movies> = ({ page, results, total_pages, total_results }) => {
  // const percentCanvas = useRef<HTMLCanvasElement>(null);

  // useEffect(() => {
  //   if (percentCanvas) {
  //     const ctx = percentCanvas?.current?.getContext("2d");
  //     console.log(ctx);
  //     ctx?.beginPath();
  //     ctx?.arc(95, 50, 40, 0, 2 * Math.PI);
  //     ctx?.stroke();
  //   }
  // }, [results]);

  return (
    <div>
      <h1 className="text-5xl text-center sm:text-left font-semibold my-4">
        Popular Movies
      </h1>

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
        {results.map((movie) => (
          <div key={movie?.id} className="relative">
            <Thumbnail movie={movie} />
            <div className="font-semibold mt-5">{movie?.title}</div>
            <div className="text-sm text-gray-700">
              {new Date(movie?.release_date).toDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
