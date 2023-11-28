import Image from "next/image";
import React from "react";

type AboutApproachProps = { imageUrl: string; title: string; desc: string };

const AboutApproach = ({ imageUrl, title, desc }: AboutApproachProps) => {
  return (
    <div className="flex flex-col gap-5">
      <Image src={imageUrl} alt="Innovative Solutions" width={70} height={70} />
      <h3 className="font-medium text-black text-xl">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
};

export default AboutApproach;
