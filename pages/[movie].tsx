import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import useSWR from "swr";
import { FC } from "react";

import Grid from "../components/Grid";
import Layout from "../components/Layout";
import MovieInfo from "../components/MovieInfo";
import Thumbnail from "../components/Thumbnail";
import { API_KEY, API_URL } from "../configs/config";
import { Credits, MovieDetails } from "../types/movie";

const fetcher = async (url: string) => await (await fetch(url)).json();

const MovieDetail: FC = () => {
  const router: NextRouter = useRouter();
  const movieID = router.query["movie"];

  const movieEndpoint = `${API_URL}movie/${movieID}?api_key=${API_KEY}`;
  const creditsEndpoint = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}`;

  const { data: movie, error: movieError } = useSWR<MovieDetails>(
    movieEndpoint,
    fetcher
  );
  const { data: credits, error: creditsError } = useSWR<Credits>(
    creditsEndpoint,
    fetcher
  );

  console.log(credits);

  return (
    <Layout>
      <Head>
        <title>Next JS Movie DB | {movie?.title}</title>
      </Head>

      {movie && (
        <MovieInfo
          movie={movie}
          directors={
            credits
              ? credits?.crew?.filter((member) => member?.job === "Director")
              : null
          }
        />
      )}

      <Grid header="Casts">
        {credits &&
          credits?.cast?.map((actors) => (
            <div key={actors?.cast_id}>
              <Thumbnail
                src={actors?.profile_path}
                alt={actors?.original_name}
              />
            </div>
          ))}
      </Grid>
      <Grid header="Crews">
        {credits &&
          credits?.crew?.map((members) => (
            <div key={members?.credit_id}>
              <Thumbnail
                src={members?.profile_path}
                alt={members?.original_name}
              />
            </div>
          ))}
      </Grid>
    </Layout>
  );
};

export default MovieDetail;
