import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUsersGear } from "@fortawesome/free-solid-svg-icons";

export const list = [
  "Proin gravida nibh vel",
  "Auctor aliquet aenean quis",
  "Bibend Auctor nisi elit",
  "Excepteur sint occaecat",
  "Ut enim ad minima veniam",
  "At vero eos et accusamu",
];
export const Experience = () => {
  return (
    <section id="experience" className="max-w-[1280px] mx-auto pb-10">
      <div className="our-experience grid grid-cols-2 ">
        <div className=" flex flex-col space-y-3">
          <p className=" uppercase font-inter font-medium text-iwLightBlue text-sm">
            our experience
          </p>
          <h1 className=" text-gray-900 font-bold text-4xl font-inter">
            Expert with Experience
          </h1>
          <p className=" text-iwLightBlue font-inter text-sm max-w-4xl">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident.
          </p>
          <div className="grid grid-cols-2">
            {list.map((checklist, index) => {
              return (
                <div className="flex w-fit items-center space-x-2 my-1">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className=" w-6 p-2 fill-iwLightBlue bg-iwLightBlue rounded-full"
                    style={{ color: "white" }}
                  />
                  <p className="text-gray-900 font-inter text-sm ">
                    {checklist}
                  </p>
                </div>
              );
            })}
          </div>
          <hr class=" h-px my-8 bg-gray-300 border-0"></hr>
          <div className="flex justify-start items-center">
            <FontAwesomeIcon
              icon={faUsersGear}
              className=" w-24 p-3 bg-iwLightBlue rounded-md mr-2"
              style={{ color: "#ffff" }}
            />
            <div className="flex flex-col">
              <h1 className="text-gray-900 font-semibold text-xl font-inter">
                Best Practice From Industry Experts
              </h1>
              <p className=" text-iwLightBlue font-inter text-sm max-w-4xl">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment.
              </p>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-2 justify-items-center w-fit justify-self-center">
          <Image
            src="/images/photo.jpg"
            alt="Header Photo"
            width={230}
            height={230}
            className=" rounded-3xl shadow-sm m-3"
          />
          <Image
            src="/images/photo.jpg"
            alt="Header Photo"
            width={200}
            height={200}
            className=" rounded-3xl shadow-sm m-3"
          />
          <Image
            src="/images/photo.jpg"
            alt="Header Photo"
            width={200}
            height={200}
            className=" rounded-3xl shadow-sm m-3"
          />
          <Image
            src="/images/photo.jpg"
            alt="Header Photo"
            width={230}
            height={230}
            className=" rounded-3xl shadow-sm m-3"
          />
        </div>
      </div>
    </section>
  );
};
