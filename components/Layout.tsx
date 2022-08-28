import Head from "next/head";
import React from "react";
import { ChildType } from "../types/params";
import Footer from "./Footer";
import Header from "./Header";


function Layout({ children }: ChildType) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className="font-poppins max-w-[100vw]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;