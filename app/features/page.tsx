import CustomLetterBlock from "@/components/custom-letter-block";
import SequenceItem from "@/components/sequence-item";
import { letterBlock, sequenceList } from "@/constants";
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
      <section className="flex flex-col gap-7 py-8 px-[10rem] text-center text-white bg-green-800">
        <h2 className="text-4xl font-semibold">
          Seamless Integration with Omnicell ADC
        </h2>
        <p>
          Streamlines the medication administration process and provides safe
          and secure transportation of medications from the medication cabinet
          to the patient’s bedside. Nurses' shifts involve multiple trips to the
          Omnicell ADC & bedsides. Using the OmniKart eliminates the need for
          multiple trips by allowing nurses to request, retrieve, and deliver
          all patient's medication in a single trip.
        </p>
        <div className="w-full mx-auto grid gap-4 grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4">
          {sequenceList.map((item, index) => (
            <React.Fragment key={index}>
              <SequenceItem {...item} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
