import Image from "next/image";
import { FC } from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../configs/config";

const Thumbnail: FC<{ src: string | null; alt: string }> = ({ src, alt }) => {
  const posterPathResolver = (poster_path: string | null) => {
    return poster_path
      ? IMAGE_BASE_URL + POSTER_SIZE + poster_path
      : "/images/sad.jpg";
  };

  return (
    <Image
      width={342}
      height={342 * 1.67}
      objectFit="cover"
      alt={alt}
      src={posterPathResolver(src)}
      className="rounded-md width-full"
    />
  );
};

export default Thumbnail;
