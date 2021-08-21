import Head from "next/head";
import { ReactElement, useState } from "react";

import Grid from "@components/Grid";
import Layout from "@components/Layout";
import LoadMore from "@components/LoadMore";
import Page from "@components/Page";
import { NOW_PLAYING_BAES_URL } from "@configs/config";

export default function Home() {
  const [page, setPage] = useState(1);

  const pages: ReactElement<{ page: number }>[] = [] as ReactElement<{
    page: number;
  }>[];
  for (let i = 1; i <= page; i++) {
    pages.push(<Page url={NOW_PLAYING_BAES_URL} page={i} key={i} />);
  }

  return (
    <Layout>
      <Head>
        <title>Next JS Movie DB | Now Playing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid header="Latest Movies">{pages}</Grid>

      <LoadMore setPage={setPage} />
    </Layout>
  );
}