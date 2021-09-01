import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import useSWR from "swr";

import Card from "@components/Card";
import Grid from "@components/Grid";
import Layout from "@components/Layout";
import MovieInfo from "@components/MovieInfo";
import { API_KEY, API_URL, IMAGE_BASE_URL, POSTER_SIZE } from "@configs/config";
import { Credits, Movies } from "../../interfaces/movie";
import { fetcher } from "@helpers/fetcher";

const MovieDetail: FC = () => {
  const router: NextRouter = useRouter();
  const movieID = router.query["movie"];

  const creditsEndpoint = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}`;
  const similarEndpoint = `${API_URL}movie/${movieID}/similar?api_key=${API_KEY}&language=en-US`;

  const { data: credits, error: creditsError } = useSWR<Credits>(
    creditsEndpoint,
    fetcher
  );
  const { data: similar, error: similarError } = useSWR<Movies>(
    similarEndpoint,
    fetcher
  );
  // console.log(similar, similarError);

  // console.log(credits);

  return (
    <Layout>
      <MovieInfo
        directors={
          credits
            ? credits?.crew?.filter((member) => member?.job === "Director")
            : null
        }
      />

      <Grid header="Casts" size="SM">
        {credits &&
          credits?.cast?.map((actors) => (
            <Link
              key={actors?.cast_id + actors?.character}
              href={{ pathname: "/credits/" + actors?.id.toString() }}
            >
              <a>
                <Card
                  src={actors?.profile_path}
                  alt={actors?.character}
                  type="profile"
                  title={actors?.original_name}
                  name={actors?.character}
                  rating={actors?.popularity}
                />
              </a>
            </Link>
          ))}
      </Grid>

      <Grid header="Crews" size="SM">
        {credits &&
          credits?.crew?.map((members) => (
            <Link
              key={members?.credit_id}
              href={{ pathname: "/credits/" + members?.id.toString() }}
            >
              <a>
                <Card
                  src={members?.profile_path}
                  alt={members?.original_name}
                  type="profile"
                  title={members?.name}
                  name={members?.job}
                  rating={members?.popularity}
                />
              </a>
            </Link>
          ))}
      </Grid>

      <div className="text-gray-50 text-xl font-semibold mt-8">
        Similar Movies:{" "}
      </div>
      <div className="grid lg:grid-cols-6 gap-4 my-4">
        {similar &&
          similar?.results?.map((movie, index: number) => (
            <Link href={movie?.id.toString()} key={index}>
              <a>
                <Image
                  width={300}
                  height={450}
                  alt={movie?.title}
                  src={IMAGE_BASE_URL + POSTER_SIZE + movie?.poster_path}
                  className="rounded-md"
                />
              </a>
            </Link>
          ))}
      </div>
    </Layout>
  );
};

export default MovieDetail;
