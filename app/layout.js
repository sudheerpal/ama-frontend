import { Inter, Radio_Canada } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/home/navbar/TopNavbar";
import MainNavbar from "@/components/home/navbar/MainNavbar";
import { parentCategories } from "@/db/fakedata";
import { fetchParentCategories } from "@/utils/fetchFunctions";

const inter = Inter({ subsets: ["latin"] });
export const radioCanada = Radio_Canada({ subsets: ["latin"] });

export const metadata = {
  title: "Advance Market Analytics",
  description: "Research paper selling website",
};

export default async function RootLayout({ children }) {
  const parentCategories = await fetchParentCategories();
  return (
    <html data-theme="customTheme" lang="en">
      <body className={radioCanada.className}>
        <TopNavbar />
        <MainNavbar parentCategories={parentCategories} />
        <main>{children}</main>
      </body>
      {/* <body className={radioCanada.className}>{children}</body> */}
    </html>
  );
}
