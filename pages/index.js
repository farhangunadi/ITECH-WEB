import Head from "next/head";
import styles from "../styles/Home.module.css";

import Image from "next/image";
import { Card1 } from "../components/Card1";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="header" className=" py-16">
        <div className=" w-full flex justify-center mx-auto items-center py-10">
          <div className=" w-auto max-w-[50%] flex flex-col pr-10 space-y-4">
            <p className=" text-iwLightBlue uppercase font-inter font-medium">
              Growth our business
            </p>
            <h1 className=" text-8xl font-inter font-bold">
              From Idea to Products
            </h1>
            <p className=" text-iwLightBlue font-inter">
              It is a long established fact that a reader will be distracted by
              the readeble content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less
              normaldistribution of letters.
            </p>
            <a
              href=""
              className=" bg-iwLightBlue text-iwWhite py-4 px-8 rounded-md w-fit"
            >
              Get Started
            </a>
          </div>
          <div className="wrap-img">
            <Image
              src="/images/photo.jpg"
              alt="Header Photo"
              width={500}
              height={500}
              className=" rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section id="service" className=" py-16">
        <div className=" flex flex-row flex-wrap justify-center items-end space-x-24">
          <div className=" max-w-md">
            <p className=" text-iwLightBlue uppercase font-medium">
              Our Service
            </p>
            <h1 className=" text-black font-bold text-3xl">
              We Offer a Wide Variety of IT Services
            </h1>
          </div>
          <div className=" max-w-md">
            <p className="text-iwLightBlue font-normal text-sm">
              It is a long established fact that a reader will be distracted by
              the readeble content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
          <a
            href=""
            className="bg-iwLightBlue text-iwWhite py-4 px-8 rounded-md uppercase h-fit"
          >
            All Services
          </a>
        </div>
        <div className=" py-8 flex flex-row flex-wrap justify-center items-end space-x-12">
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </section>
    </div>
  );
}
