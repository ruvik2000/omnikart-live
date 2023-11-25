import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="flex flex-col">
      <section className="relative pt-[5rem] h-screen flex flex-col items-center justify-center md:justify-start gap-[1.7rem] md:gap-[1.8rem] px-4 md:px-[6rem] lg:px-[15rem] bg-neutral-100">
        <h1 className="text-3xl md:text-5xl lg:7xl">About Us</h1>
        <p className="z-10 text-xs text-center md:text-sm font-semibold md:font-medium lg:text-base">
          OmniKart is a product of Omni-Health.
        </p>
        <p className="z-10 text-xs text-center md:text-sm font-semibold md:font-medium lg:text-base">
          Omni-Health is a leading provider of automation solutions in the
          healthcare industry. With a passion for operational efficiency, we aim
          to provide the best solutions in the market to every customer.
        </p>
        <p className="z-10 text-xs text-center md:text-sm font-semibold md:font-medium lg:text-base">
          By bringing in the latest technology in workflow management, along
          with our in-house ability to customise solutions to each
          organisations’ needs, Omni-Health sets itself apart from the
          competition.
        </p>
        <p className="z-10 text-xs text-center md:text-sm font-semibold md:font-medium lg:text-base">
          Together with our principal partners, Omni-Health brings a fresh and
          innovative approach to consulting services, acting as liaison between
          end-user and automation technology provider. We strive to exceed the
          expectations of every client by offering outstanding customer service,
          increased flexibility, and greater value, thus optimizing system
          functionality, and improving operational efficiency. Our associates
          are distinguished by their functional and technical expertise combined
          with their hands-on experience, thereby ensuring that our clients
          receive the most effective and professional service.{" "}
        </p>
        <p className="z-10 text-xs text-center md:text-sm font-semibold md:font-medium lg:text-base">
          OmniKart is designed specifically to meet these goals by providing
          your nurses with a fast, safe, and convenient method of medication
          administration. Our team of trained Engineers provide round-the-clock
          support including product training and technical fault resolution.
        </p>
        <Image
          src="/omnikart full.webp"
          alt="Omnikart Full"
          width={420}
          height={420}
          className="z-1 absolute right-0 bottom-0 opacity-30 md:opacity-50 md:brightness-75"
        />
      </section>
    </main>
  );
};

export default About;
