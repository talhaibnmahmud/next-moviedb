import Image from "next/image";
import { FC } from "react";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../configs/config";

const Thumbnail: FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const posterPathResolver = (poster_path: string) => {
    return poster_path ? IMAGE_BASE_URL + POSTER_SIZE + poster_path : "";
  };

  return (
    <Image
      width={342}
      height={342 * 1.67}
      objectFit="cover"
      alt={alt}
      src={posterPathResolver(src)}
      className="rounded-t-md width-full"
    />
  );
};

export default Thumbnail;
