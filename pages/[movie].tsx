import { NextRouter, useRouter } from "next/router";
import useSWR from "swr";
import { FC } from "react";

import Grid from "@components/Grid";
import Layout from "@components/Layout";
import MovieInfo from "@components/MovieInfo";
import Thumbnail from "@components/Thumbnail";
import { API_KEY, API_URL } from "@configs/config";
import { Credits } from "../types/movie";

const fetcher = async (url: string) => await (await fetch(url)).json();

const MovieDetail: FC = () => {
  const router: NextRouter = useRouter();
  const movieID = router.query["movie"];

  const creditsEndpoint = `${API_URL}movie/${movieID}/credits?api_key=${API_KEY}`;

  const { data: credits, error: creditsError } = useSWR<Credits>(
    creditsEndpoint,
    fetcher
  );

  console.log(credits);

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
            <div key={actors?.cast_id}>
              <Thumbnail
                src={actors?.profile_path}
                alt={actors?.original_name}
                width={185}
                height={185 * 1.5}
              />
            </div>
          ))}
      </Grid>
      <Grid header="Crews" size="SM">
        {credits &&
          credits?.crew?.map((members) => (
            <div key={members?.credit_id}>
              <Thumbnail
                src={members?.profile_path}
                alt={members?.original_name}
                width={185}
                height={185 * 1.5}
              />
            </div>
          ))}
      </Grid>
    </Layout>
  );
};

export default MovieDetail;
