import { FC } from "react";

import { Movie } from "../types/movie";
import Thumbnail from "@components/Thumbnail";

const Card: FC<{ movie: Movie }> = ({ movie }) => {
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
    <div
      key={movie?.id}
      className="relative bg-purple-600 shadow-md rounded-md"
    >
      <div className="relative">
        <Thumbnail
          src={movie?.poster_path}
          alt={movie?.original_title}
          width={500}
          height={750}
        />
        <div className="w-10 h-10 rounded-full bg-gray-800 font-sans  inline-flex justify-center items-center text-gray-200 absolute right-5 -bottom-4 z-10">
          {/* <canvas
                ref={percentCanvas}
                height="200"
                width="200"
                className="border-2 border-gray-600"
              ></canvas> */}
          {movie?.vote_average}
        </div>
      </div>
      <div className="flex justify-between items-start px-4 pb-4 mt-6">
        <div>
          <div className="font-semibold leading-5 text-gray-100">
            {movie?.title}
          </div>
          <div className="text-sm text-gray-300">
            {new Date(movie?.release_date).toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
