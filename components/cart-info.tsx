import { cartInfo } from "@/constants";
import Image from "next/image";
import React from "react";

type CartInfoProps = (typeof cartInfo)[number];

const CartInfo = ({ imageUrl, infoTitle, infoList }: CartInfoProps) => {
  return (
    <div className="group flex items-center justify-start h-[20rem] w-[90%] mx-auto even:flex-row-reverse">
      <div className="relative flex items-center justify-center h-full w-[35%]">
        <Image
          src={imageUrl}
          alt={infoTitle}
          width={320}
          height={320}
          quality={98}
          priority
          className="w-full h-full !object-cover rounded-l-3xl brightness-50 group-even:rounded-r-3xl group-even:rounded-l-none"
        />
        <h3 className="absolute px-2 text-center font-semibold text-2xl text-white">
          {infoTitle}
        </h3>
      </div>
      <div className="flex-1 h-full flex items-center bg-gray-400/50 rounded-r-3xl group-even:rounded-r-none group-even:rounded-l-3xl">
        <ul className="list-disc flex flex-col gap-4 ml-10">
          {infoList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartInfo;
