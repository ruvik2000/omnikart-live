import CustomLetterBlock from "@/components/custom-letter-block";
import Feature from "@/components/feature";
import SequenceItem from "@/components/sequence-item";
import { featureList, letterBlock, sequenceList } from "@/constants";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col">
      <section className="mt-10 lg:mt-20 h-[20rem] lg:h-[30rem] px-30 flex items-center justify-center gap-3 lg:gap-[5rem] bg-neutral-100">
        {letterBlock.map((item, index) => (
          <React.Fragment key={index}>
            <CustomLetterBlock {...item} />
          </React.Fragment>
        ))}
      </section>
      <section className="flex flex-col gap-7 py-8 px-[2rem] lg:px-[10rem] text-center text-white bg-green-800">
        <h2 className="text-4xl font-semibold">
          Seamless Integration with Omnicell ADC
        </h2>
        <p className="text-sm lg:text-base">
          Streamlines the medication administration process and provides safe
          and secure transportation of medications from the medication cabinet
          to the patient’s bedside. Nurse's shifts involve multiple trips to the
          Omnicell ADC & bedsides. Using the OmniKart eliminates the need for
          multiple trips by allowing nurses to request, retrieve, and deliver
          all patient's medication in a single trip.
        </p>
        <div className="w-fit mx-auto grid gap-4 grid-cols-1 grid-rows-8 lg:grid-cols-2 lg:grid-rows-4">
          {sequenceList.map((item, index) => (
            <React.Fragment key={index}>
              <SequenceItem {...item} />
            </React.Fragment>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-7 py-8 px-[2rem] lg:px-[10rem] text-center bg-neutral-100">
        <h2 className="text-4xl font-semibold">Features</h2>
        <div className="w-fit mx-auto grid gap-6 grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2">
          {featureList.map((item, index) => (
            <React.Fragment key={index}>
              <Feature {...item} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
