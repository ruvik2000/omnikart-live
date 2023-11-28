import React from "react";

type SequenceItemProps = {
  number: number;
  description: string;
};

const SequenceItem = ({ number, description }: SequenceItemProps) => {
  return (
    <div className="relative flex items-center justify-start bg-white mx-auto w-[90%] text-black px-5 py-10 rounded-xl grad">
      <div className="absolute -left-8 bg-white w-14 h-14 flex items-center justify-center rounded-full grad">
        <span className="font-bold">{number}</span>
      </div>
      <p className="ml-3 !text-left font-semibold">{description}</p>
    </div>
  );
};

export default SequenceItem;
