import { FC } from "react";

import Thumbnail from "@components/Thumbnail";

interface Props {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  title: string;
  job?: string;
  name?: string;
  date?: string;
  rating?: number;
  type?: "backdrop" | "poster" | "profile" | "still" | "logo";
}

const Card: FC<Props> = ({ ...prop }) => {
  return (
    <div className="relative bg-purple-600 shadow-md rounded-md">
      <div className="relative">
        <Thumbnail
          src={prop.src}
          alt={prop.alt}
          type={prop.type}
          width={prop.width}
          height={prop.height}
        />
        <div className="w-10 h-10 rounded-full bg-gray-800 font-sans  inline-flex justify-center items-center text-gray-200 absolute right-5 -bottom-4 z-10">
          {prop?.rating?.toFixed(0)}
        </div>
      </div>
      <div className="flex justify-between items-start px-4 pb-4 mt-6">
        <div>
          <div className="font-semibold leading-5 text-gray-100">
            {prop.title}
          </div>
          {prop.date && (
            <div className="text-sm text-gray-300">
              {new Date(prop.date).toDateString()}
            </div>
          )}
          {prop.name && (
            <div className="text-sm text-gray-300">{prop?.name}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
