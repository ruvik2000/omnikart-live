import { techSpecs } from "@/lib";
import React from "react";

type SpecItemProps = (typeof techSpecs)[number];

const SpecItem = ({ title, items }: SpecItemProps) => {
  return (
    <div className="w-full py-5 px-1 gap-2 border-b border-b-[#1f1f1f] dark:border-b-[#f1f1f1] last:border-none">
      <h2 className="text-xl mb-2 text-green-500 dark:text-green-500/70">
        {title}
      </h2>
      <div className="w-full flex flex-col items-center justify-center gap-1">
        {items.map((specItem, index) => (
          <div
            className="w-full flex flex-col md:flex-row items-start justify-start gap-2"
            key={index}
          >
            <h4 className="text-sm flex-1">{specItem.name}</h4>
            <p className="text-xs text-justify flex-1 text-gray-400 dark:text-gray-300/40">
              {specItem.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecItem;
