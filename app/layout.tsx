import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";
import Header from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omnikart.net"),
  title: "Omnicell ADC | OMNIKART | Singapore",
  description:
    "OmniKART pairs with the Omnicell ADC to help your nursing staff attend to patients more efficiently. Read more.",
  keywords: "Health",
  openGraph: {
    title: "Omnicell ADC | OMNIKART | Singapore",
    description:
      "OmniKART pairs with the Omnicell ADC to help your nursing staff attend to patients more efficiently. Read more.",
    siteName: "OmniKart",

    type: "website",
    url: "https://www.omnikart.net",
  },
  twitter: {
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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
