"use client";

import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
  return (
    <main className="flex flex-col">
      <section className="relative pt-[5rem] h-screen flex flex-col items-center justify-center md:justify-start gap-[1.7rem] md:gap-[1.8rem] px-4 md:px-[6rem] lg:px-[15rem] bg-neutral-100 dark:bg-gray-900 dark:text-white">
        <h1 className="-mt-16 text-5xl lg:7xl md:mt-8">Let's Talk</h1>
        <p className="-mt-3 uppercase">How can we help</p>
        <form
          className="w-full px-10 flex flex-col gap-3"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Message sent successfully!");
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex-1 pt-4 md:pt-12">
              <input
                type="text"
                placeholder="Name"
                name="senderName"
                required
                maxLength={500}
                className="w-full py-2 pr-2 bg-transparent border-b-2 border-b-green-400 outline-none"
              />
            </div>
            <div className="flex-1 pt-4 md:pt-12">
              <input
                type="email"
                placeholder="Email"
                name="senderEmail"
                required
                maxLength={500}
                className="w-full py-2 pr-2 bg-transparent border-b-2 border-b-green-400 outline-none"
              />
            </div>
          </div>
          <div className="flex-1 pt-4 md:pt-12">
            <input
              type="text"
              placeholder="Company Name"
              name="senderCompany"
              required
              maxLength={500}
              className="w-full py-2 pr-2 bg-transparent border-b-2 border-b-green-400 outline-none"
            />
          </div>
          <div className="flex-1 pt-4 md:pt-12">
            <textarea
              placeholder="Message"
              name="senderMessage"
              required
              maxLength={5000}
              className="w-full py-2 pr-2 bg-transparent border-b-2 border-b-green-400 outline-none"
            />
          </div>
          <div className="flex-1 pt-4 md:pt-12 flex items-center justify-center">
            {/* <button className="bg-green-400 px-8 py-3 rounded-xl text-white hover:bg-green-500/90 transition">
              Send Message
            </button> */}
            <SubmitBtn />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
