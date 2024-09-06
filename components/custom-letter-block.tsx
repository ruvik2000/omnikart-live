import React from "react";
import { motion } from "framer-motion";

type CustomLetterBlockProps = {
  letter: string;
  description: string;
};

const CustomLetterBlock = ({ letter, description }: CustomLetterBlockProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      <div className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] flex items-center justify-center rounded-xl lg:rounded-3xl bg-white shadow-lg dark:bg-[#1f1f1f] dark:shadow-2xl border-2 dark:border-black">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl lg:text-7xl font-bold text-green-500"
        >
          {letter}
        </motion.h2>
        <motion.h2 className="absolute text-3xl lg:text-7xl font-bold text-white blur-xl">
          {letter}
        </motion.h2>
      </div>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -bottom-10 font-bold text-center text-[8px] lg:text-sm "
      >
        {description}
      </motion.p>
    </div>
  );
};

export default CustomLetterBlock;
