import { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { HitApi } from "../../classes/HitApi";
import { IHitApi, RequestMethod } from "../../interfaces/IHitApi";
import styles from "./Header.module.css";

export const getStaticProps: GetStaticProps = async (context) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

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
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
};

const Header = ({ posts }: any): ReactElement => {
  return (
    <div className={styles.container}>
      <ul>
        {posts &&
          posts.map((post: any, index: Number) => (
            <li key={index.toString()}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default Header;
