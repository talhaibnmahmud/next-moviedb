import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import useSWR from "swr";

import { API_KEY, API_URL } from "@configs/config";
import { convertCurrency } from "@helpers/helpers";
import { Crew, MovieDetails } from "../types/movie";
import Thumbnail from "@components/Thumbnail";
import { fetcher } from "@helpers/fetcher";

const MovieInfo: FC<{ directors: Crew[] | null }> = ({ directors }) => {
  const router: NextRouter = useRouter();
  const movieID = router.query["movie"];

  const movieEndpoint = `${API_URL}movie/${movieID}?api_key=${API_KEY}`;
  const { data: movie, error: movieError } = useSWR<MovieDetails>(
    movieEndpoint,
    fetcher
  );

  // console.log(movie);

  return (
    <>
      <Head>
        <title>Next JS Movie DB | {movie?.title}</title>
      </Head>

      <div className="bg-purple-500 bg-opacity-50 flex flex-col md:flex-row p-4 md:items-center md:space-x-6 rounded-md shadow-sm text-gray-100">
        {movie && (
          <>
            <Thumbnail
              src={movie?.poster_path}
              alt={movie?.original_title}
              type="backdrop"
              width={342}
              height={342 * 1.5}
            />

            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl text-gray-50">
                {movie?.title}{" "}
                <span className="text-base text-gray-200">
                  ({new Date(movie?.release_date).getFullYear()})
                </span>
              </h1>

              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-gray-100">
                <div className="flex flex-wrap md:items-center space-x-2">
                  {movie?.genres?.map((genre) => (
                    <div
                      key={genre?.id}
                      className="bg-purple-800 py-1 px-2 rounded-full mt-2 md:mt-0"
                    >
                      {genre?.name}
                    </div>
                  ))}
                </div>
                <span className="hidden md:inline">&#8226;</span>
                <div>
                  <span className="md:hidden">Runtime: </span>
                  {movie?.runtime}m
                </div>
              </div>

              <div className="italic text-lg">{movie?.tagline}</div>

              <div>
                <h3 className="text-gray-100 text-xl font-semibold">Plot:</h3>
                <p className="text-gray-200 max-w-xl">{movie?.overview}</p>
              </div>

              <div
                className={
                  (movie?.vote_average < 2.5
                    ? "bg-red-500 "
                    : movie?.vote_average < 5
                    ? "bg-orange-500 "
                    : movie?.vote_average < 7.5
                    ? "bg-yellow-500 "
                    : "bg-green-500 ") +
                  "h-12 w-12 rounded-full inline-flex items-center justify-center"
                }
              >
                {movie?.vote_average}
              </div>

              <div className="flex space-x-4">
                <div>
                  Budget:{" "}
                  {movie?.budget ? convertCurrency(movie?.budget) : "Unknown"}
                </div>
                <div>
                  Revenue:{" "}
                  {movie?.revenue ? convertCurrency(movie?.revenue) : "Unknown"}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Director(s): </h3>
                <div className="flex space-x-2">
                  {directors?.map((director) => (
                    <div key={director?.credit_id}>{director?.name}</div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {movie?.belongs_to_collection && (
        <div className="my-4 flex flex-col justify-center">
          <h3 className="text-2xl text-gray-200 my-2">
            From: {movie?.belongs_to_collection?.name}
          </h3>
          <Thumbnail
            src={movie?.belongs_to_collection?.backdrop_path}
            alt={movie?.belongs_to_collection?.name}
            width={300}
            height={450}
            type="backdrop"
          />
        </div>
      )}
    </>
  );
};

export default MovieInfo;
