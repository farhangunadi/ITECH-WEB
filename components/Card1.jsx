import Image from "next/image";
import React from "react";

export const Card1 = () => {
  return (
    <div className=" h-3/5 w-auto overflow-hidden">
      <Image
        src="/images/photo.jpg"
        className=" object-cover w-full h-1/2"
        alt="services 1"
        objectFit="cover"
        width={300}
        height={300}
      />
    </div>
  );
};
