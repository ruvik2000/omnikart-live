import { cartInfo } from "@/lib";
import Image from "next/image";
import React from "react";

type CartInfoProps = (typeof cartInfo)[number];

const CartInfo = ({ imageUrl, infoTitle, infoList }: CartInfoProps) => {
  return (
    <div className="group flex flex-col h-[35rem] w-[90%] mx-auto md:flex-row md:h-[20rem] even:md:flex-row-reverse dark:text-white">
      <div className="relative flex items-center justify-center h-[50%] w-full md:h-full md:w-[30%]">
        <Image
          src={imageUrl}
          alt={infoTitle}
          width={320}
          height={320}
          quality={98}
          priority
          className="w-full h-full object-cover rounded-t-3xl brightness-50 md:rounded-tr-none md:rounded-l-3xl group-even:md:rounded-l-none group-even:md:rounded-r-3xl"
        />
        <h3 className="absolute px-2 text-center font-semibold text-xl text-white">
          {infoTitle}
        </h3>
      </div>
      <div className="flex-1 bg-gray-400/50 py-4 px-10 rounded-b-3xl flex flex-col md:rounded-r-3xl md:rounded-bl-none group-even:md:rounded-r-none group-even:md:rounded-l-3xl dark:bg-[#1f1f1f]">
        <ul className="flex-1 list-disc flex flex-col items-start justify-around md:justify-center md:gap-4">
          {infoList.map((item, index) => (
            <li key={index} className="text-sm md:text-base">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartInfo;
