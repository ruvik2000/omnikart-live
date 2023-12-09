"use client";

import CartInfo from "@/components/cart-info";
import { cartInfo } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="flex flex-col">
      <section className="relative h-screen w-full flex flex-col gap-3 items-start justify-center p-[2rem] md:p-[5rem]">
        <motion.div
          className="z-10 bg-green-500/40 px-4 py-3 rounded-full -mt-16 dark:bg-[#39d353]/80"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs md:text-sm font-semibold dark:text-white">
            #Best Medical Transportation Device
          </p>
        </motion.div>
        <div className="z-10">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
            className="text-3xl md:text-6xl font-light tracking-tighter leading-[3rem] md:leading-tight dark:text-white"
          >
            <span className="font-bold">SAFETY</span> ASSURED AND{" "}
            <span className="font-bold">EFFICIENCY</span>
            <br className="hidden md:block" />
            GUARANTEED, <span className="font-bold">SECURE</span> MEDICATION
            TRANSPORTATION
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="flex gap-3 z-10 flex-col md:flex-row"
        >
          <Link
            href="/features"
            className="bg-green-400 px-[2.5rem] py-1 md:px-[5rem] md:py-2 rounded-lg text-white font-medium dark:bg-[#39d353]"
            aria-label="Product Features"
          >
            Explor Features
          </Link>
          <Link
            href="/contact"
            className="border-2 border-black px-[2.5rem] py-1 md:px-[5rem] md:py-2 rounded-lg text-black font-medium dark:text-white dark:border-white"
            aria-label="Contact Us"
          >
            Contact Us
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/omnikart.webp"
            alt="kart image"
            width={500}
            height={500}
            quality={98}
            priority
            className="absolute w-auto h-auto z-1 opacity-20 lg:opacity-100 md:block -right-0 bottom-0 object-cover"
          />
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-start gap-[2rem] px-5 md:px-[15rem] py-[5rem] bg-green-400 text-white dark:bg-green-500/50 ">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold"
        >
          What is OmniKart?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className="text-center"
        >
          OmniKart is a sophisticated mobile medication workstation,
          specifically designed to cater to the daily routines of nurses in
          hospitals. The system is engineered to optimize the medication
          administration process while ensuring secure transportation of
          medications from the cabinet to the patient’s bedside.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
          className="text-center"
        >
          This exceptional system empowers nurses to effortlessly request,
          retrieve, and deliver all their patients’ medication in a single trip
          to the medication cabinet, thereby boosting overall efficiency and
          quality of care.
        </motion.p>
      </section>
      <section className="flex flex-col gap-10 [&>*:nth-child(2)]:mt-20 md:[&>*:nth-child(2)]:mt-0 py-[5rem] px-[2.5rem] md:px-[5rem] bg-neutral-100 dark:bg-gray-300">
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
