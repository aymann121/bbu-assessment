
import "./globals.css"; // allows the use of tailwinc.css
import Footer from "./components/footer"; // imports the footer component
import Header from "./head"; // imports the header component

export const metadata = {
  title: "Birth By Us Assessment",
  description: "Created by Ayman Noreldaim",
  icon: "./favicon.ico",
};

export default function RootLayout({ children }) {
  /*
  This function is responsible for rendering the layout of the website.
  Contains the header, the main content, and the footer.
  */
  return (
    <html lang="en">
      <Header />
      <body className = "min-h-screen bg-gradient-to-b to-[#be4f5e] from-[#f8c1af]">
        <main className = "flex flex-col min-h-screen"> 
          <div className = "grow">{children}</div>
          <Footer className = "" />
        </main>
      </body>
    </html>
  );
}
