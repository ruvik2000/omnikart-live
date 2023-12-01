"use client";

import { balooBhai2 } from "@/app/fonts";
import { links } from "@/lib";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <header className="z-[999] relative text-black">
      <nav className="flex fixed items-center py-4 px-6 lg:px-[10rem] w-full shadow-xl select-none bg-white dark:bg-[#1f1f1f] dark:text-white">
        <motion.a
          href="/"
          className={`${balooBhai2.className} font-semibold text-2xl`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Omni<span className="text-green-500">Kart</span>
        </motion.a>
        <div className="flex-1 flex  items-center justify-end">
          <ul className="hidden md:flex items-center gap-3">
            {links.map((item, index) => (
              <motion.li
                key={index}
                className="last:border-2 border-green-500 last:px-5 last:py-1 rounded-full"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link href={item.hash} aria-label={item.ariaLabel}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <button
            className="text-2xl p-2 rounded-full md:hidden hover:bg-gray-500/20"
            aria-label="Aria Menu"
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
    <ul className="fixed right-2 top-[5rem] p-2 flex flex-col gap-4 w-[10rem] items-start bg-white shadow-xl rounded-md dark:bg-gray-800 dark:text-white">
      {links.map((item, index) => (
        <li
          key={index}
          className="w-full hover:bg-gray-600/10  py-1 rounded-md"
        >
          <Link
            href={item.hash}
            className="ml-[5px]"
            aria-label={item.ariaLabel}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
