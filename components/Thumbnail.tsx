import Image from "next/image";
import { FC } from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../configs/config";
import { Movie } from "../types/movie";

const Thumbnail: FC<{ movie: Movie }> = ({ movie }) => {
  const posterPathResolver = (poster_path: string) => {
    return poster_path ? IMAGE_BASE_URL + POSTER_SIZE + poster_path : "";
  };

  return (
    <div className="relative">
      <Image
        width={342}
        height={342 * 1.67}
        objectFit="cover"
        alt={movie?.original_title}
        src={posterPathResolver(movie?.poster_path)}
        className="rounded-md width-full"
      />
      <div className="w-10 h-10 rounded-full bg-gray-800 font-sans  inline-flex justify-center items-center text-gray-200 absolute right-5 -bottom-4 z-20">
        {/* <canvas
                ref={percentCanvas}
                height="200"
                width="200"
                className="border-2 border-gray-600"
              ></canvas> */}
        {movie?.vote_average}
      </div>
    </div>
  );
};

export default Thumbnail;
