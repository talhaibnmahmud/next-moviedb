import Link from "next/link";
import { FC } from "react";
import useSWR from "swr";

import Card from "@components/Card";
import { fetcher } from "@helpers/fetcher";
import { Movies } from "../types/movie";

const Page: FC<{ url: string; page: number }> = ({ url, page }) => {
  const endpoint = `${url}&page=${page}`;
  const { data: movies, error } = useSWR<Movies>(endpoint, fetcher);
  // console.log({ movies, error });

  return (
    <>
      {movies &&
        movies?.results.map((movie, movieIndex) => (
          <Link href={"movie/" + movie?.id.toString()} key={movieIndex}>
            <a>
              <Card
                src={movie?.poster_path}
                alt={movie?.original_title}
                type="poster"
                width={421}
                height={632}
                title={movie?.title}
                date={movie?.release_date}
                rating={movie?.vote_average}
              />
            </a>
          </Link>
        ))}
    </>
  );
};

export default Page;
