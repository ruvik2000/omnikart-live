import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnikart.net/"),
  title: "Omnicell ADC | OMNIKART | Singapore",
  description:
    "OmniKART pairs with the Omnicell ADC to help your nursing staff attend to patients more efficiently. Read more.",
  keywords:
    "Omnikart, Omnicell, Omni-Health, Singapore, Cutting-edge, Workstation, Medication Workstation, Health, Keyless, Time Saving, Healthcare ",
  robots: "index, follow",
  openGraph: {
    title: "Omnicell ADC | OMNIKART | Singapore",
    description:
      "OmniKART pairs with the Omnicell ADC to help your nursing staff attend to patients more efficiently. Read more.",
    siteName: "OmniKart",
    type: "website",
    url: "/",
  },
  twitter: {
    images: "/omni.png",
    card: "summary_large_image",
    title: "Omnicell ADC | OMNIKART | Singapore",
    description:
      "OmniKART pairs with the Omnicell ADC to help your nursing staff attend to patients more efficiently. Read more.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white/80 dark:bg-[#1f1f1f]`}>
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-left" />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
