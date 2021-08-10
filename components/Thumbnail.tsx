import Image from "next/image";
import { FC } from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../configs/config";
import { Movie } from "../types/movie";

const Thumbnail: FC<{ movie: Movie }> = ({ movie }) => {
  const posterPathResolver = (poster_path: string) => {
    return poster_path ? IMAGE_BASE_URL + POSTER_SIZE + poster_path : "";
  };

  return (
    <div>
      <Image
        width={342}
        height={342 * 1.67}
        objectFit="cover"
        alt={movie?.original_title}
        src={posterPathResolver(movie?.poster_path)}
        className="rounded-md width-full"
      />
    </div>
  );
};

export default Thumbnail;
