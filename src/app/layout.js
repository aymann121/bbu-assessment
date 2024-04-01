// import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";


export const metadata = {
  title: "Birth By Us Sample",
  description: "Created by Ayman Noreldaim",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className = "min-h-screen bg-gradient-to-b to-[#be4f5e] from-[#f8c1af]">
        
        <main className = "flex flex-col min-h-screen">
        <div className = "grow">{children}</div>
        <Footer className = "" />
        </main>
      </body>
    </html>
  );
}
