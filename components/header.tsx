"use client";

import { balooBhai2 } from "@/app/fonts";
import { links } from "@/constants";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="z-[999] relative">
      <nav className="flex items-center fixed py-4 px-5 lg:px-[10rem] w-full shadow-xl select-none">
        <Link
          href="/"
          className={`${balooBhai2.className} font-semibold text-2xl`}
        >
          Omni<span className="text-green-500">Kart</span>
        </Link>
        <div className="flex-1 flex  items-center justify-end">
          <ul className="hidden md:flex items-center gap-3">
            {links.map((item, index) => (
              <li
                key={index}
                className="last:border-2 border-green-500 last:px-5 last:py-1 rounded-full"
              >
                <Link href={item.hash}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button
            className="text-2xl p-2 rounded-full md:hidden hover:bg-gray-500/20"
            onClick={() => {
              setMenuVisible(!menuVisible);
            }}
          >
            {menuVisible ? <LuX /> : <LuMenu />}
          </button>
        </div>
      </nav>
      {menuVisible && <SideMenu />}
    </header>
  );
};

export default Header;

export const SideMenu = () => {
  return (
    <ul className="absolute right-2 top-[5rem] p-2 flex flex-col gap-4 w-[10rem] items-start bg-white shadow-xl rounded-md">
      {links.map((item, index) => (
        <li
          key={index}
          className="w-full hover:bg-gray-600/10  py-1 rounded-md"
        >
          <Link href={item.hash} className="ml-[5px]">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
