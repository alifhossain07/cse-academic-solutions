import type { Metadata } from "next";
import { Montserrat, Open_Sans, Raleway } from "next/font/google"; // Import Raleway
import "./globals.css";
import Header from "./components/shared/Header";
import { LanguageProvider } from "./context/LanguageContext";
import ClickSpark from "./components/react-bits-animations/ClickSpark/ClickSpark";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway", // Define the variable
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CSE Academic Solutions",
  description: "Generated by All Info Zone ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${raleway.variable} antialiased`} // Add Raleway variable
      >
        <ClickSpark sparkColor='#0f0d0d'
  sparkSize={20}
  sparkRadius={30}
  sparkCount={8}
  duration={400}>
        <LanguageProvider>
          
          <Header />
          {children}
          
        
        </LanguageProvider>
        </ClickSpark>
       
      </body>
    </html>
  );
}
