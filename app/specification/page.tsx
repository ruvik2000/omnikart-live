import SpecItem from "@/components/spec-item";
import { techSpecs } from "@/lib";
import React from "react";

const Specification = () => {
  return (
    <main className="flex flex-col">
      <section className="relative p-[5rem] h-fit flex flex-col items-center justify-center md:justify-start gap-[1.7rem] md:gap-[1.8rem] px-4 md:px-[6rem] lg:px-[15rem] bg-neutral-100 dark:bg-[#1f1f1f] dark:text-white border-b dark:border-b-gray-300">
        <h1 className="about-heading text-green-500">
          Technical Specifications
        </h1>
        <div className=" w-full">
          {techSpecs.map((item, index) => (
            <React.Fragment key={index}>
              <SpecItem {...item} />
            </React.Fragment>
          ))}
        </div>
        <a
          href="/OmniKart_Brochure_Product_Brochure.pdf"
          target="_black"
          className="bg-green-500 px-5 py-3 rounded-full text-white hover:opacity-80 dark:bg-green-700"
        >
          Download Brochure
        </a>
      </section>
    </main>
  );
};

export default Specification;
