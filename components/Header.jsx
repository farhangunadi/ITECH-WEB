import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <section id="header" className=" max-w-[1280px] mx-auto py-16">
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
            the readeble content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less
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
  );
};
