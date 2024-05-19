/** @format */
import Header from "../components/Header";
import { raleway } from "./font";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={raleway.variable}>
      <body className='flex flex-col  min-h-screen px-4 md:px-[100px] py-2  bg-[#FEFAF6] text-black animate-fade-up animate-once animate-ease-in-out'>
        <header className='text-[#EE7703]'>
          <Header />
        </header>
        <main>{children}</main>
        <footer className='mt-4 md:mt-44 text-[#EE7703]'>
          <div className='flex font-raleway text-8xl md:text-[276px] font-extrabold justify-center items-center md:pb-4'>
            <h1 className=''>SAHAL</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
