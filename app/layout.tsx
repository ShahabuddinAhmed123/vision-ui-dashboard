"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AuthProvider from "@/context/AuthContext";
import { useState, useEffect } from "react";
import Head from "next/head";
import "./globals.css";
import "./i18n";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openSidebar, setOpenSidebar] = useState(true);
  const handleOpenSidebar = () => setOpenSidebar(!openSidebar);
  const handleCloseSidebar = () => setOpenSidebar(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setOpenSidebar(true);
      } else {
        setOpenSidebar(false);
      }
    };
    
    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const language = pathname.includes("/rtl") ? "ar" : "en";

  useEffect(() => {
    document.body.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <html lang={language}>
      <Head>
        <title>Vision ui dashboard</title>
        <meta name="description" content="This is my application description." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex">
        <Navbar openSidebar={openSidebar} handleOpenSidebar={handleOpenSidebar} />
        {openSidebar && <Sidebar onClick={handleCloseSidebar} />}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}