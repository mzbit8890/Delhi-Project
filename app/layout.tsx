import { persistor, store } from "@/Store/store";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/theme"
import "./globals.css";

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import RootProvider from "@/providers/RootProvider";
import HbIcon from "@/assests/HbIcon.png";
import { SpeedInsights } from "@vercel/speed-insights/next";
const AppBar = dynamic(() => import("@/components/AppBar/main"), {
  ssr: false,
});

import { Pacifico, Hind } from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"], weight: ['400'], variable: '--font-pacifico' });
const hind = Hind({ subsets: ["latin"], weight: ['400'], variable: '--font-hind' });
const hindBold = Hind({ subsets: ["latin"], weight: ['700'], variable: '--font-hind-bold' });

// import localFont from '@next/font/local';
// const myfont = localFont({ src: '@/assests/fonts/segoe/SegoeUI.woff' });

export const metadata: Metadata = {
  title: "Hostel Bird",
  description: "The new Gen Hostel finder",
  icons: [HbIcon.src],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${hind.variable} ${hindBold.variable}`} style={{ margin: 0}}>
      <ThemeProvider theme={theme}>
        <RootProvider>
          {children} <SpeedInsights />
        </RootProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}