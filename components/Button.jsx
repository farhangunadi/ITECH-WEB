import React from "react";

export const ButtonComp = (props) => {
  return (
    <a
      href=""
      className="bg-iwLightBlue text-iwWhite md:py-4 py-3 md:px-8 px-6 rounded-md border-2 w-fit block hover:bg-iwWhite hover:border-2 hover:border-iwLightBlue hover:text-iwLightBlue cursor-pointer"
    >
      {props.title}
    </a>
  );
};

ButtonComp.defaultProps = {
  title: "Button",
};
