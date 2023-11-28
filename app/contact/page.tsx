import React from "react";

const Contact = () => {
  return (
    <main className="flex flex-col">
      <section className="relative pt-[5rem] h-screen flex flex-col items-center justify-center md:justify-start gap-[1.7rem] md:gap-[1.8rem] px-4 md:px-[6rem] lg:px-[15rem] bg-neutral-100">
        <h1 className="-mt-16 text-5xl lg:7xl md:mt-8">Let's Talk</h1>
        <p className="-mt-3 uppercase">How can we help</p>
        <form className="w-full px-10 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex-1 pt-4 md:pt-12">
              <input
                type="text"
                placeholder="Name"
                className="w-full py-2 pr-2 bg-transparent border-b-4 border-b-green-400 outline-none"
              />
            </div>
            <div className="flex-1 pt-4 md:pt-12">
              <input
                type="email"
                placeholder="Email"
                className="w-full py-2 pr-2 bg-transparent border-b-4 border-b-green-400 outline-none"
              />
            </div>
          </div>
          <div className="flex-1 pt-4 md:pt-12">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full py-2 pr-2 bg-transparent border-b-4 border-b-green-400 outline-none"
            />
          </div>
          <div className="flex-1 pt-4 md:pt-12">
            <input
              type="text"
              placeholder="Message"
              className="w-full py-2 pr-2 bg-transparent border-b-4 border-b-green-400 outline-none"
            />
          </div>
          <div className="flex-1 pt-4 md:pt-12 flex items-center justify-center">
            <button className="bg-green-400 px-8 py-3 rounded-xl text-white">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Contact;
