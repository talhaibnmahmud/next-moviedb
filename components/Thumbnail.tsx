import Image from "next/image";
import { FC } from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../configs/config";

interface Props {
  alt: string;
  width: number;
  height: number;
  src: string | null;
}

const Thumbnail: FC<Props> = ({ src, alt, width, height }) => {
  const posterPathResolver = (poster_path: string | null) => {
    return poster_path
      ? IMAGE_BASE_URL + POSTER_SIZE + poster_path
      : "/images/sad.jpg";
  };

  return (
    <Image
      width={width}
      height={height}
      objectFit="cover"
      alt={alt}
      src={posterPathResolver(src)}
      className="rounded-md width-full"
    />
  );
};

export default Thumbnail;
