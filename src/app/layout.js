import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ 
  subsets: ["latin"],
  variables: "--font-inter" 
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio of Mr. Vaibhav Verma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variables, "bg-background text-foreground")}>
        {children}
        </body>
    </html>
  );
}
