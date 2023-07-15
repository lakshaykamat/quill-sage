 "use client"
import { usePathname } from "next/navigation";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { getLayout } from "./lib/getLayout";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname()
  const Layout = getLayout(path, children)
  return (
    <html lang="en">
      <head>
        <title>Snap Note</title>
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
        <meta aria-description=""></meta>
      </head>
      <body className={`${inter.className} bg-very_light`}>
        {Layout}
      </body>
    </html>
  );
}
