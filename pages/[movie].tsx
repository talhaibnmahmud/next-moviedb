import { NextRouter, useRouter } from "next/router";
import useSWR from "swr";
import { FC } from "react";

import Card from "@components/Card";
import Grid from "@components/Grid";
import Layout from "@components/Layout";
import MovieInfo from "@components/MovieInfo";
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
            <Card
              key={actors?.id}
              src={actors?.profile_path}
              alt={actors?.character}
              type="profile"
              width={500}
              height={750}
              title={actors?.character}
              name={actors?.original_name}
              rating={actors?.popularity}
            />
          ))}
      </Grid>

      <Grid header="Crews" size="SM">
        {credits &&
          credits?.crew?.map((members) => (
            <Card
              key={members?.id}
              src={members?.profile_path}
              alt={members?.original_name}
              type="profile"
              width={500}
              height={750}
              title={members?.name}
              name={members?.job}
              rating={members?.popularity}
            />
          ))}
      </Grid>
    </Layout>
  );
};

export default MovieDetail;
