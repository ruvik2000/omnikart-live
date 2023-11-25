import { featureList } from "@/constants";
import Image from "next/image";
import React from "react";

type FeatureProps = (typeof featureList)[number];

const Feature = ({ imgUrl, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col px-2 items-center justify-evenly w-[250px] h-[350px] border-[3px] rounded-xl border-black shadow-lg">
      <Image src={imgUrl} alt="height" width={100} height={100} />
      <p className="font-semibold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Feature;
