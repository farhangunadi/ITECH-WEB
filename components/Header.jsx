import React from "react";
import Image from "next/image";
import { ButtonComp } from "./Button";

export const Header = () => {
  return (
    <section id="header" className=" ">
      <div className="md:container md:mx-auto md:py-16 py-8 w-full flex-col md:flex-row justify-center mx-auto items-center md:space-x-20 md:flex">
        <div className=" w-auto h-auto md:max-w-[50%] flex flex-col md:pr-10 px-8 space-y-4 justify-center md:justify-start">
          <p className=" text-iwLightBlue uppercase font-inter font-medium text-center md:text-left">
            Growth our business
          </p>
          <h1 className=" text-5xl md:text-8xl font-inter font-bold text-center md:text-left">
            From Idea to Products
          </h1>
          <p className=" text-iwLightBlue font-inter text-center md:text-left text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the readeble content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less
            normaldistribution of letters.
          </p>
          <div className="mx-auto md:mx-0 my-6">
            <ButtonComp title="Get Started" />
          </div>
        </div>
        <div className="wrap-img mx-0 hidden md:block">
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
  );
};
