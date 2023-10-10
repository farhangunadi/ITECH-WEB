import React from "react";
import { Card1 } from "./Card1";
import { ButtonComp } from "./Button";

export const Service = () => {
  return (
    <section id="service" className="max-w-[1280px] mx-auto py-10 w-full">
      <div className=" flex-col flex md:flex-row flex-wrap justify-center md:items-end items-start md:space-x-20 px-8 md:px-0">
        <div className=" max-w-md my-2">
          <p className=" text-iwLightBlue uppercase font-medium text-sm">
            Our Service
          </p>
          <h1 className=" text-black font-bold text-3xl">
            We Offer a Wide Variety of IT Services
          </h1>
        </div>
        <div className=" max-w-md my-1">
          <p className="text-iwLightBlue font-normal text-sm">
            It is a long established fact that a reader will be distracted by
            the readeble content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </div>
        <div className=" my-4">
          <ButtonComp title="All Services" />
        </div>
      </div>
      <div className=" py-8 flex flex-row flex-wrap justify-center items-end space-x-18">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </section>
  );
};
