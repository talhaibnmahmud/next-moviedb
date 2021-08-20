import Head from "next/head";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { FC } from "react";
import useSWR from "swr";

import Layout from "@components/Layout";
import {
  API_KEY,
  CREDIT_URL,
  IMAGE_BASE_URL,
  PROFILE_SIZE,
} from "@configs/config";
import { fetcher } from "@helpers/fetcher";

interface People {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

interface Images {
  id: string;
  profiles: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: null;
    vote_avg: number | null;
    vote_count: number;
    width: number;
  }[];
}

const Credid: FC = () => {
  const router: NextRouter = useRouter();
  const creditID = router.query["credit"];

  const creditsEndpoint = `${CREDIT_URL}${creditID}?api_key=${API_KEY}`;
  const imageEndpoint = `${CREDIT_URL}${creditID}/images?api_key=${API_KEY}`;
  const { data, error } = useSWR<People>(creditsEndpoint, fetcher);
  const { data: images, error: imageError } = useSWR<Images>(
    imageEndpoint,
    fetcher
  );

  console.log(data, error);
  console.log(images, imageError);

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

        <div className="text-gray-50 text-xl font-semibold mt-8">Photos: </div>
        <div className="grid lg:grid-cols-6 gap-4 my-4">
          {images?.profiles.map((image, index: number) => (
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

export default Credid;
