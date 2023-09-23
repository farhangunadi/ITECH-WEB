import Image from "next/image";
import React from "react";

export const Card1 = () => {
  return (
    <div className="relative rounded-md h-[400px] w-[350px] max-w-xl p-3 border-2 mx-3">
      <Image
        src="/images/photo.jpg"
        alt="services 1"
        layout="fill"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};
