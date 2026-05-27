import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Canadian Roofing Co. | Trusted Roofing Services Across Canada',
  description: 'Canadian Roofing Company Ltd. provides expert residential and commercial roofing services, repairs, and installations. Get a free estimate today for quality craftsmanship and reliable service.',
  keywords: ["Canadian roofing, roofing company, roof repair, roof installation, residential roofing, commercial roofing, Toronto roofing, Vancouver roofing, Montreal roofing, Calgary roofing"],
  openGraph: {
    "title": "Canadian Roofing Co. | Trusted Roofing Services Across Canada",
    "description": "Your trusted partner for all residential and commercial roofing needs across Canada. Quality craftsmanship, reliable service, built to last.",
    "url": "https://www.canadianroofing.com",
    "siteName": "Canadian Roofing Co.",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/3d-geometric-abstract-background_1048-17367.jpg",
        "alt": "Newly installed asphalt shingle roof on a modern Canadian home"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Canadian Roofing Co. | Trusted Roofing Services Across Canada",
    "description": "Your trusted partner for all residential and commercial roofing needs across Canada. Quality craftsmanship, reliable service, built to last.",
    "images": [
      "http://img.b2bpic.net/free-photo/3d-geometric-abstract-background_1048-17367.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
