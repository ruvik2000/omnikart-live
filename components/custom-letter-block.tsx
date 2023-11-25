import React from "react";

type CustomLetterBlockProps = {
  letter: string;
  description: string;
};

const CustomLetterBlock = ({ letter, description }: CustomLetterBlockProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] flex items-center justify-center rounded-xl lg:rounded-3xl bg-white shadow-lg">
        <h2 className="absolute text-3xl lg:text-7xl font-bold text-green-500">
          {letter}
        </h2>
      </div>
      <p className="absolute -bottom-10 font-bold text-center text-[8px] lg:text-sm ">
        {description}
      </p>
    </div>
  );
};

export default CustomLetterBlock;
