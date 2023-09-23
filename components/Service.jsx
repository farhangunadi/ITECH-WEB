import React from "react";
import { Card1 } from "./Card1";

export const Service = () => {
  return (
    <section id="service" className="max-w-[1280px] mx-auto py-10 w-full">
      <div className=" flex flex-row flex-wrap justify-center items-end space-x-20">
        <div className=" max-w-md">
          <p className=" text-iwLightBlue uppercase font-medium text-sm">
            Our Service
          </p>
          <h1 className=" text-black font-bold text-3xl">
            We Offer a Wide Variety of IT Services
          </h1>
        </div>
        <div className=" max-w-md">
          <p className="text-iwLightBlue font-normal text-sm">
            It is a long established fact that a reader will be distracted by
            the readeble content of a page when looking at its layout. The point
            of using Lorem Ipsum
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
  );
};
