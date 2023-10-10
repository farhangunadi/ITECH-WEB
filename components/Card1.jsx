import Image from "next/image";
import React from "react";

export const Card1 = () => {
  return (
    <div className="relative rounded-md md:h-[400px] h-[200px] w-[120px] md:w-[350px] max-w-xl p-3 border-2 md:mx-3 mx-1">
      <Image
        src="/images/photo.jpg"
        alt="services 1"
        layout="fill"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
