import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className=" w-full flex justify-center mx-auto items-center py-10 space-x-20">
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
      <section id="service" className=" py-10 w-full">
        <div className=" flex flex-row flex-wrap justify-center items-end space-x-20">
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
        <div className=" py-8 flex flex-row flex-wrap justify-center items-end space-x-18">
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </section>
      <section id="about" className=" py-8">
        <div className=" grid grid-cols-3 justify-center items-start mx-10 gap-x-28">
          <div className=" relative w-[400px] h-full">
            <Image
              src="/images/photo.jpg"
              alt="about photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" flex flex-col space-y-4 col-span-2">
            <p className=" text-iwLightBlue uppercase font-medium text-lg font-inter">
              about us
            </p>
            <h1 className=" text-gray-900 font-bold text-4xl font-inter">
              We deal with The Aspects Of Professional IT Services
            </h1>
            <p className=" text-iwLightBlue font-inter">
              It is a long established fact that a reader will be distracted by
              the readeble content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less
              normaldistribution of letters.
            </p>
            <div className=" flex justify-stretch my-3">
              <div className=" flex items-start border-2 mr-2 p-3">
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className=" w-16 p-2 fill-iwLightBlue"
                  style={{ color: "#5e6fb5" }}
                />
                <div className="block ml-2">
                  <h1 className=" font-bold text-lg text-gray-900">
                    Experience
                  </h1>
                  <p className="text-iwLightBlue font-normal">
                    Our great team of more than 1000 software expert
                  </p>
                </div>
              </div>
              <div className=" flex items-start border-2 ml-2 p-3">
                <FontAwesomeIcon
                  icon={faSitemap}
                  className=" w-16 p-2"
                  style={{ color: "#5e6fb5" }}
                />
                <div className="block ml-2">
                  <h1 className=" font-bold text-lg text-gray-900">
                    Quick Support
                  </h1>
                  <p className="text-iwLightBlue font-normal">
                    We'll help you test bold new ideas while sharing tour.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-iwLightBlue font-inter">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <a
              href="/"
              className=" cursor-pointer bg-iwLightBlue border-2 text-iwWhite py-4 px-8 rounded-md w-fit hover:bg-iwWhite hover:border-2 hover:border-iwLightBlue hover:text-iwLightBlue"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
