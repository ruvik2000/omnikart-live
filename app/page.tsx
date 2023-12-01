import CartInfo from "@/components/cart-info";
import { cartInfo } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col">
      <section className="relative h-screen w-full flex flex-col gap-3 items-start justify-center p-[2rem] md:p-[5rem]">
        <div className="z-10 bg-green-500/40 px-4 py-3 rounded-full -mt-16 dark:bg-[#39d353]/80">
          <p className="text-xs md:text-sm font-semibold dark:text-white">
            #Best Medical Transportation Device
          </p>
        </div>
        <div className="z-10">
          <h1 className="text-3xl md:text-6xl font-light tracking-tighter leading-[3rem] md:leading-tight dark:text-white">
            <span className="font-bold">SAFETY</span> ASSURED AND{" "}
            <span className="font-bold">EFFICIENCY</span>
            <br className="hidden md:block" />
            GUARANTEED, <span className="font-bold">SECURE</span> MEDICATION
            TRANSPORTAION
          </h1>
        </div>
        <div className="flex gap-3 z-10 flex-col md:flex-row">
          <Link
            href="/features"
            className="bg-green-400 px-[2.5rem] py-1 md:px-[5rem] md:py-2 rounded-lg text-white font-medium dark:bg-[#39d353]"
            aria-label="Learn more about the features of omnikart product"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="border-2 border-black px-[2.5rem] py-1 md:px-[5rem] md:py-2 rounded-lg text-black font-medium dark:text-white dark:border-white"
            aria-label="Contact the omnikart team regarding any information"
          >
            Contact Us
          </Link>
        </div>
        <Image
          src="/omnikart.png"
          alt="kart image"
          width={500}
          height={500}
          quality={98}
          priority
          className="absolute w-auto h-auto z-1 opacity-20 lg:opacity-100 md:block -right-0 bottom-0 object-cover"
        />
      </section>
      <section className="flex flex-col items-center justify-start gap-[2rem] px-5 md:px-[15rem] py-[5rem] bg-green-400 text-white dark:bg-green-500/50 ">
        <h2 className="text-4xl font-semibold">What is OmniKart?</h2>
        <p className="text-center">
          OmniKart is a sophisticated mobile medication workstation,
          specifically designed to cater to the daily routines of nurses in
          hospitals. The system is engineered to optimize the medication
          administration process while ensuring secure transportation of
          medications from the cabinet to the patient’s bedside.
        </p>
        <p className="text-center">
          This exceptional system empowers nurses to effortlessly request,
          retrieve, and deliver all their patients’ medication in a single trip
          to the medication cabinet, thereby boosting overall efficiency and
          quality of care.
        </p>
      </section>
      <section className="flex flex-col gap-10 py-[5rem] px-[2.5rem] md:px-[5rem] bg-neutral-100 dark:bg-gray-300">
        {cartInfo.map((item) => (
          <React.Fragment key={item.id}>
            <CartInfo {...item} />
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};

export default Home;
