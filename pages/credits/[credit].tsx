import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import useSWR from "swr";

import Card from "@components/Card";
import Layout from "@components/Layout";
import {
  API_KEY,
  CREDIT_URL,
  IMAGE_BASE_URL,
  PROFILE_SIZE,
} from "@configs/config";
import { fetcher } from "@helpers/fetcher";
import Grid from "@components/Grid";
import { Images, MovieCredits, People, TVCredits } from "../../types/credits";

const Credit: FC = () => {
  const router: NextRouter = useRouter();
  const creditID = router.query["credit"];

  const detailsEndpoint = `${CREDIT_URL}${creditID}?api_key=${API_KEY}`;
  const moviesEndpoint = `${CREDIT_URL}${creditID}/movie_credits?api_key=${API_KEY}`;
  const tvEndpoint = `${CREDIT_URL}${creditID}/tv_credits?api_key=${API_KEY}`;
  const imageEndpoint = `${CREDIT_URL}${creditID}/images?api_key=${API_KEY}`;

  const { data, error } = useSWR<People>(detailsEndpoint, fetcher);
  const { data: movies, error: moviesError } = useSWR<MovieCredits>(
    moviesEndpoint,
    fetcher
  );
  const { data: tv, error: tvError } = useSWR<TVCredits>(tvEndpoint, fetcher);
  const { data: images, error: imageError } = useSWR<Images>(
    imageEndpoint,
    fetcher
  );

  // console.log(data, error);
  // console.log(movies, moviesError);
  // console.log(tv, tvError);
  // console.log(images, imageError);

  return (
    <Layout>
      <Head>
        <title>Next JS Movie DB | {data?.name}</title>
      </Head>

      <div>
        <div className="sm:flex gap-6">
          <div className="max-w-sm">
            <Image
              alt={data?.name}
              src={IMAGE_BASE_URL + "original" + data?.profile_path}
              width={1080}
              height={1620}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <div className="text-3xl md:text-4xl lg:text-6xl text-gray-50 font-semibold">
              {data?.name}
            </div>
            <div className="text-gray-100 md:text-lg lg:text-xl font-semibold">
              {data?.known_for_department}
              {data?.adult && <span>Pornography</span>}
            </div>
            <div className="text-gray-200 md:text-lg lg:text-xl">
              Born in{" "}
              <span className="font-semibold hover:underline">
                {data?.birthday}
              </span>{" "}
              in{" "}
              <span className="font-semibold hover:underline">
                {data?.place_of_birth}
              </span>
            </div>
            <div className="text-gray-200">
              Gender:
              {data?.gender == 2
                ? " Male"
                : data?.gender == 1
                ? " Female"
                : " Other"}
            </div>
          </div>
        </div>

        <div className="mt-4 text-gray-300 text-justify">{data?.biography}</div>

        {/* In Movies */}
        {movies?.cast && (
          <Grid header="In Movies" size="SM">
            {movies?.cast?.map((role, index) => (
              <Link
                key={index}
                href={{ pathname: "/movie/" + role?.id.toString() }}
              >
                <a>
                  <Card
                    src={role?.poster_path}
                    alt={role?.character}
                    type="profile"
                    title={role?.character}
                    name={role?.title}
                    rating={role?.popularity}
                  />
                </a>
              </Link>
            ))}
          </Grid>
        )}

        {/* Movie Production */}
        {movies?.crew && (
          <Grid header="In Production" size="SM">
            {movies?.crew?.map((role, index) => (
              <Link
                key={index}
                href={{ pathname: "/movie/" + role?.id.toString() }}
              >
                <a>
                  <Card
                    src={role?.poster_path}
                    alt={role?.job}
                    type="profile"
                    title={role?.title}
                    name={role?.job}
                    rating={role?.popularity}
                  />
                </a>
              </Link>
            ))}
          </Grid>
        )}
        {/* In TVs */}
        {tv?.cast && (
          <Grid header="In TV" size="SM">
            {tv?.cast?.map((role, index) => (
              <Link
                key={index}
                href={{ pathname: "/movie/" + role?.id.toString() }}
              >
                <a>
                  <Card
                    src={role?.poster_path}
                    alt={role?.character}
                    type="profile"
                    title={role?.name}
                    name={role?.character}
                    rating={role?.popularity}
                  />
                </a>
              </Link>
            ))}
          </Grid>
        )}

        {/* TV Production */}
        {tv?.crew && (
          <Grid header="TV Production" size="SM">
            {tv?.crew?.map((role, index) => (
              <Link
                key={index}
                href={{ pathname: "/movie/" + role?.id.toString() }}
              >
                <a>
                  <Card
                    src={role?.poster_path}
                    alt={role?.job}
                    type="profile"
                    title={role?.name}
                    name={role?.job}
                    rating={role?.popularity}
                  />
                </a>
              </Link>
            ))}
          </Grid>
        )}

        {/* Photos */}
        <div className="text-gray-50 text-xl font-semibold mt-8">Photos: </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4">
          {images?.profiles?.map((image, index: number) => (
            <Image
              key={index}
              width={image.width}
              height={image.height}
              alt={data?.name}
              src={IMAGE_BASE_URL + PROFILE_SIZE + image.file_path}
              className="rounded-md"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Credit;
