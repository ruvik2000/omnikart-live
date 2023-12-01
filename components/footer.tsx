import { balooBhai2 } from "@/app/fonts";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 bg-white text-black dark:bg-[#1f1f1f] dark:text-white">
      <div className="flex flex-col md:flex-row items-center justify-center pb-10 pt-10 gap-[2.5rem] md:gap-[5rem]">
        <div className="flex flex-col justify-center items-center">
          <Link
            href="/"
            className={`${balooBhai2.className} font-semibold text-xl px-2`}
          >
            Omni<span className="text-green-500">Kart</span>
          </Link>
          <Link
            href="https://www.omnihealth.com/"
            className="font-semibold px-2"
          >
            A brand of Omni-Health
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-start gap-1">
          <h4 className="uppercase font-medium">Product</h4>
          <ul className="text-sm flex flex-col items-center md:items-start gap-1">
            <li>
              <Link
                href="/features"
                aria-label="Visit to view all the features the OmniKart provides"
                className="px-2"
              >
                Features
              </Link>
            </li>
            <li>
              <Link href="/specification" className="px-2">
                Technical Specifications
              </Link>
            </li>
            <li>
              <a
                href="/OmniKart_Brochure_Product_Brochure.pdf"
                target="_black"
                className="px-2"
              >
                Download Brochure
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start gap-1">
          <h4 className="uppercase font-medium">Connect</h4>
          <ul className="text-sm flex flex-col items-center md:items-start gap-1">
            <li>
              <Link href="mailto:info@omnikart.net" className="px-2">
                Email Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="px-2" aria-label="">
                Send us a Message
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[80%] m-auto border-t-2 border-gray-500/25" />
      <div className="flex flex-col md:flex-row items-center justify-around gap-3 pb-10 pt-10">
        <p className="text-sm text-gray-500">
          &copy; 2024 OmniKart. All rights reserved.
        </p>
        <Link
          href="https://shanukapeiris.netlify.app/"
          className="hover:underline text-sm text-gray-500 px-2"
          aria-label="To view more details about the developer and designer of the website"
        >
          Design & Dev
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
