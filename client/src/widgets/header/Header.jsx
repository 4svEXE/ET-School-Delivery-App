import React from "react";

import { useNavigate } from "react-router-dom";

const navigation = [
  {
    path: "/",
    title: "Shop",
  },
  {
    path: "/cart",
    title: "Shopping Cart",
  },
];

export default function Header({ toggleTheme }) {
  const navigate = useNavigate();

  const linkNav = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white border-gray-200 fixed top-0 w-full z-20 px-4 lg:px-6 py-2.5">
      <nav className="mx-auto max-w-7xl flex items-center justify-center px-6 py-2 lg:px-8 lg:justify-between">
        <div className="flex flex-wrap items-center max-w-screen-xl">
          <div className="flex lg:flex-1">
            <a
              href="/"
              className="flex items-center"
              onClick={(e) => linkNav(e, "/")}
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap">
                Delivery Shops
              </span>

              <span className="sr-only">test project</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((n) => (
            <a
              key={n.title}
              href={n.path}
              onClick={(e) => linkNav(e, n.path)}
              className="text-md text-black font-semibold leading-6 dark:text-white"
            >
              {n.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
