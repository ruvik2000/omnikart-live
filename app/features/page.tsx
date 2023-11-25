import CustomLetterBlock from "@/components/custom-letter-block";
import { letterBlock } from "@/constants";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col">
      <section className="mt-20 h-[20rem] px-40 flex items-center justify-center gap-[5rem] bg-neutral-100">
        {letterBlock.map((item, index) => (
          <React.Fragment key={index}>
            <CustomLetterBlock {...item} />
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};

export default page;
