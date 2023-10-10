import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { ButtonComp } from "./Button";

export const About = () => {
  return (
    <section id="about" className="">
      <div className=" flex flex-col md:grid grid-cols-3 justify-center items-start mx-10 gap-x-28">
        <div className=" md:relative hidden w-[400px] h-full">
          <Image
            src="/images/photo.jpg"
            alt="about photo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" flex flex-col space-y-4 col-span-2">
          <p className=" text-iwLightBlue uppercase font-medium text-sm font-inter">
            about us
          </p>
          <h1 className=" text-gray-900 font-bold text-4xl font-inter">
            We deal with The Aspects Of Professional IT Services
          </h1>
          <p className=" text-iwLightBlue font-inter">
            It is a long established fact that a reader will be distracted by
            the readeble content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less
            normaldistribution of letters.
          </p>
          <div className=" flex justify-stretch my-3">
            <div className=" flex items-start border-2 mr-2 p-3 rounded-md">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className=" w-16 p-2 fill-iwLightBlue"
                style={{ color: "#5e6fb5" }}
              />
              <div className="block ml-2">
                <h1 className=" font-bold text-lg text-gray-900">Experience</h1>
                <p className="text-iwLightBlue font-normal">
                  Our great team of more than 1000 software expert
                </p>
              </div>
            </div>
            <div className=" flex items-start border-2 ml-2 p-3 rounded-md">
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
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <ButtonComp title="Read More" />
        </div>
      </div>
    </section>
  );
};
