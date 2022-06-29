import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HitApi } from "../classes/HitApi";
import { IHitApi, RequestMethod } from "../interfaces/IHitApi";

export const getStaticProps: GetStaticProps = async (context) => {
  const hitApiParams: IHitApi = {
    url: "https://jsonplaceholder.typicode.com/todos",
    ignoreBaseUrl: true,
    requestMethod: RequestMethod.GET,
  };

  const posts = await HitApi.HitApi(hitApiParams);

  console.log(posts);
  return {
    props: {
      posts,
    },
  };
};

const About: NextPage = ({ posts }: any) => {
  return (
    <div>
      <ul>
        {posts &&
          posts.map((post: any, index: Number) => (
            <li key={index.toString()}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default About;
