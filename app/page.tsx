import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Banner Section */}
      <section className="relative h-screen mt-20 w-full flex flex-col gap-3 items-start justify-center p-[2rem] md:p-[5rem]">
        <div className="z-10 bg-green-500/40 px-4 py-3 rounded-full -mt-16">
          <p className="text-xs md:text-sm font-semibold">
            #Best Medical Transportation Device
          </p>
        </div>
        <div className="z-10">
          <h1 className="text-3xl md:text-6xl font-light tracking-tighter leading-[3rem] md:leading-tight">
            <span className="font-bold">SAFETY</span> ASSURED AND{" "}
            <span className="font-bold">EFFICIENCY</span>
            <br className="hidden md:block" />
            GUARANTEED, <span className="font-bold">SECURE</span> MEDICATION
            TRANSPORTAION
          </h1>
        </div>
        <div className="flex gap-3 z-10">
          <Link
            href="/features"
            className="bg-green-400 px-[2.5rem] py-1 md:px-[5rem] md:py-2 rounded-lg text-white font-medium"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="border-2 border-black px-[2.5rem] py-1 md:px-[5rem] md:py-2 rounded-lg text-black font-medium"
          >
            Contact Us
          </Link>
        </div>
        <Image
          src="/omnikart.webp"
          alt="kart image"
          width={500}
          height={500}
          quality={98}
          className="absolute w-auto h-auto z-1 opacity-20 md:opacity-100 md:block -right-0 bottom-20 object-contain"
        />
      </section>
    </main>
  );
}
