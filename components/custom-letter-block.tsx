import React from "react";

type CustomLetterBlockProps = {
  letter: string;
  description: string;
};

const CustomLetterBlock = ({ letter, description }: CustomLetterBlockProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-[200px] h-[200px] flex items-center justify-center rounded-3xl bg-white shadow-lg">
        <h2 className="absolute  text-7xl font-bold text-green-500">
          {letter}
        </h2>
      </div>
      <p className="font-bold text-sm">{description}</p>
    </div>
  );
};

export default CustomLetterBlock;
