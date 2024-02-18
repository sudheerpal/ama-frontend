import { Inter, Radio_Canada } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const radioCanada = Radio_Canada({ subsets: ["latin"] });

export const metadata = {
  title: "Advance Market Analytics",
  description: "Research paper selling website",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="customTheme" lang="en">
      <body className={radioCanada.className}>{children}</body>
      {/* <body className={radioCanada.className}>{children}</body> */}
    </html>
  );
}
