import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import  Footer  from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UI/UX Design | Next Js",
  description: "Designed many components via hook and css styles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
