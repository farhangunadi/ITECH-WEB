import Image from "next/image";
import React from "react";

export const Card2 = (props) => {
  return (
    <div className="relative overflow-hidden flex flex-col  items-center border-2 h-full w-[300px] rounded-xl shadow-sm bg-iwWhite">
      <div className="">
        <Image src={props.src} alt="project" width={700} height={700} />
      </div>
      <div className=" p-5">
        <p className=" uppercase font-inter text-center font-normal text-iwLightBlue text-xs">
          {props.subtitle}
        </p>
        <h1 className=" text-gray-900 font-bold text-2xl font-inter text-center">
          {props.title}
        </h1>
      </div>
    </div>
  );
};

Card2.defaultProps = {
  src: "/images/photo.jpg",
  subtitle: "design development",
  title: "Crypto App Project",
};
