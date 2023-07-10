"use client"
import { usePathname } from "next/navigation";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { getLayout } from "./lib/getLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snap Note",
  description: "Snap Note Notes application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname()
  const Layout = getLayout(path, children)
  return (
    <html lang="en">
      <body className={`${inter.className} bg-very_light`}>
        {Layout}
      </body>
    </html>
  );
}
