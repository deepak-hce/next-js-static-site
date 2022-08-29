import ReactFullpage from "@fullpage/react-fullpage";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { IHitApi, RequestMethod } from "../interfaces/IHitApi";

const Silder: NextPage = ({ posts }: any) => {
  const test = () => {
    console.log("console.log");
  };

  test();

  return <div>Slider component</div>;
};

export default Silder;
