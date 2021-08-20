import Image from "next/image";
import { FC } from "react";

import {
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  PROFILE_SIZE,
} from "@configs/config";

interface Props {
  alt: string;
  width: number;
  height: number;
  src: string | null;
  type?: "backdrop" | "poster" | "profile" | "still" | "logo";
}

const Thumbnail: FC<Props> = ({ src, alt, width, height, type }) => {
  const pathResolver = (path: string | null) => {
    if (path && type === "backdrop")
      return IMAGE_BASE_URL + BACKDROP_SIZE + path;
    if (path && type === "poster") return IMAGE_BASE_URL + POSTER_SIZE + path;
    if (path && type === "profile") return IMAGE_BASE_URL + PROFILE_SIZE + path;

    return "/images/sad.jpg";
  };

  return (
    <Image
      width={width}
      height={height}
      objectFit="cover"
      alt={alt}
      src={pathResolver(src)}
      className="rounded-md width-full"
    />
  );
};

export default Thumbnail;
