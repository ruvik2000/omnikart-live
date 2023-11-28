import AboutApproach from "@/components/about-approach";
import { aboutData } from "@/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="flex flex-col">
      <section className="relative p-[5rem] h-fit flex flex-col items-center justify-center md:justify-start gap-[1.7rem] md:gap-[1.8rem] px-4 md:px-[6rem] lg:px-[15rem] bg-neutral-100">
        <h1 className="about-heading">About Us</h1>
        <div className="text-center flex flex-col gap-4">
          <p className="text">OmniKart is a product of Omni-Health.</p>
          <p>
            At Omni-Health, we lead the way in providing cutting-edge automation
            solutions for the healthcare industry. Our commitment to operational
            efficiency drives us to deliver the best solutions in the market
            tailored to each customer's unique needs.
          </p>
        </div>
        <hr className="w-[80%] md:w-[100%] h-[1.5px] bg-gray-300 rounded-full mt-10" />
        <h2 className="text-2xl md:text-4xl">Our Approach</h2>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-[5rem] mt-10 px-20 md:px-10">
          {aboutData.map((item, index) => (
            <React.Fragment key={index}>
              <AboutApproach {...item} />
            </React.Fragment>
          ))}
        </div>
        <p className="mt-20 text-center px-20 border-2 rounded-2xl py-10 border-black italic font-semibold">
          OmniKart is designed to provide your nurses with a fast, safe, and
          convenient method of medication administration. Our team of trained
          Engineers offers round-the-clock support, including product training
          and technical fault resolution.
        </p>
      </section>
    </main>
  );
};

export default About;
