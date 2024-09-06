"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

type SequenceItemProps = {
  number: number;
  description: string;
};

const SequenceItem = ({ number, description }: SequenceItemProps) => {
  const theme = useTheme();

  return (
    <div
      className={`relative flex items-center justify-start  mx-auto w-[90%] text-black px-5 py-10 rounded-xl ${
        theme.theme === "light" && `grad`
      } dark:bg-[#1f1f1f] border dark:border-white`}
    >
      <div
        className={`absolute -left-8  w-14 h-14 flex items-center justify-center rounded-full ${
          theme.theme === "light" && `grad`
        } dark:bg-[#1f1f1f] border dark:border-white dark:text-white`}
      >
        <span className="font-bold">{number}</span>
        <span className="font-bold hidden dark:block absolute dark:blur-lg">
          {number}
        </span>
      </div>
      <div className="flex items-center justify-center dark:text-white">
        <p className="ml-3 !text-left font-semibold">{description}</p>
        <p className="hidden dark:block absolute ml-3 !text-left font-semibold blur-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SequenceItem;
