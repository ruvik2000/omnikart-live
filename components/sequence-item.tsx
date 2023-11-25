import React from "react";

type SequenceItemProps = {
  number: number;
  description: string;
};

const SequenceItem = ({ number, description }: SequenceItemProps) => {
  return (
    <div className="relative flex items-center justify-start bg-white w-[90%] text-black px-5 py-10 rounded-xl border-[3px] border-black">
      <div className="absolute -left-8 bg-white border-[3px] border-black w-14 h-14 flex items-center justify-center rounded-full">
        <span>{number}</span>
      </div>
      <p className="ml-3 !text-left">{description}</p>
    </div>
  );
};

export default SequenceItem;
