import React from "react";

export const navbar = [
  {
    page: "home",
    name: "HOME",
  },
  {
    page: "service",
    name: "SERVICE",
  },
  {
    page: "page",
    name: "PAGE",
  },
  {
    page: "blog",
    name: "BLOG",
  },
];
export const Navbar = () => {
  return (
    <nav className=" bg-iwDarkBlue border-gray-200">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className=" self-center text-2xl font-semibold whitespace-nowrap text-iwWhite">
            ITECH <span className=" text-iwLightBlue">BD</span>
          </span>
        </a>
        {/* <button className="">

        </button> */}
        <div id="navbar-default" className=" hidden w-full md:block md:w-auto">
          <ul className=" font-medium flex flex-col p-4 md:p-0 mt-4 border bg-transparent  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {navbar.map((nav, index) => (
              <li>
                <a
                  href={nav.page}
                  class="block py-2 pl-3 pr-4  rounded md:bg-transparent md:text-iwWhite md:p-0 "
                  aria-current="page"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
