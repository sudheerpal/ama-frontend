import { Inter, Radio_Canada } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/home/navbar/TopNavbar";
import MainNavbar from "@/components/home/navbar/MainNavbar";
import { parentCategories } from "@/db/fakedata";

const inter = Inter({ subsets: ["latin"] });
export const radioCanada = Radio_Canada({ subsets: ["latin"] });

export const metadata = {
  title: "Advance Market Analytics",
  description: "Research paper selling website",
};

export default async function RootLayout({ children }) {
  // let data = [];
  try {
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    //  data = await res.json();
    // console.log(data);
  } catch (error) {}
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
