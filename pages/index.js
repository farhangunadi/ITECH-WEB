import Head from "next/head";
import styles from "../styles/Home.module.css";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="header">
        <div className=" w-full flex justify-center max-w-screen-2xl mx-auto h-full">
          <div className=" w-auto max-w-[50%] block">
            <p className=" text-iwLightBlue uppercase font-inter font-medium">
              Growth our business
            </p>
            <h1 className=" text-8xl font-inter font-bold">
              From Idea to Products
            </h1>
            <p className=" text-iwLightBlue font-inter mt-4 mb-8 w-3/4">
              It is a long established fact that a reader will be distracted by
              the readeble content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less
              normaldistribution of letters.
            </p>
            <a
              href=""
              className=" bg-iwLightBlue text-iwWhite py-4 px-8 mt-4 rounded-md"
            >
              Get Started
            </a>
          </div>
          <Image
            src="/images/photo.jpg"
            alt="Header Photo"
            width={500}
            height={400}
            className=" rounded-2xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}
