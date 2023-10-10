import React from "react";
import { Card2 } from "./Card2";

export const Project = () => {
  return (
    <section id="project" className="py-8 my-10">
      <div className="explore-project flex flex-col space-y-4 justify-center items-center">
        <p className=" uppercase font-inter text-center font-medium text-iwLightBlue text-sm">
          we make connections
        </p>
        <h1 className=" text-gray-900 font-bold text-4xl font-inter text-center">
          Explore Recent Projects
        </h1>
        <p className=" text-iwLightBlue font-inter text-center text-sm max-w-4xl">
          It is a long established fact that a reader will be distracted by the
          readeble content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normaldistribution of
          letters.
        </p>
        <a
          href="/"
          className=" text-sm cursor-pointer bg-iwLightBlue border-2 text-iwWhite py-4 px-10 rounded-md w-fit hover:bg-iwWhite hover:border-2 hover:border-iwLightBlue hover:text-iwLightBlue"
        >
          ALL PROJECTS
        </a>
        <div className=" flex md:flex-row flex-col space-x-5 p-4 overflow-hidden">
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>
    </section>
  );
};
