import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import { FC, ReactElement, useState } from "react";

import Card from "@components/Card";
import Grid from "@components/Grid";
import Layout from "@components/Layout";
import LoadMore from "@components/LoadMore";

import { POPULAR_BAES_URL } from "@configs/config";
import { Movies } from "../types/movie";

const fetcher = async (url: string) => await (await fetch(url)).json();

export default function Home() {
  const [page, setPage] = useState(1);

  const pages: ReactElement<{ page: number }>[] = [] as ReactElement<{
    page: number;
  }>[];
  for (let i = 1; i <= page; i++) {
    pages.push(<Page page={i} key={i} />);
  }

  return (
    <Layout>
      <Head>
        <title>Next JS Movie DB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid header="Popular Movies">{pages}</Grid>

      <LoadMore setPage={setPage} />
    </Layout>
  );
}

const Page: FC<{ page: number }> = ({ page }) => {
  const endpoint = `${POPULAR_BAES_URL}&page=${page}`;
  const { data: movies, error } = useSWR<Movies>(endpoint, fetcher);
  // console.log({ movies, error });

  return (
    <>
      {movies?.results.map((movie, movieIndex) => (
        <Link href={movie?.id.toString()} key={movieIndex}>
          <a>
            <Card
              src={movie?.poster_path}
              alt={movie?.original_title}
              type="poster"
              width={500}
              height={750}
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
