import Header from "@/components/pages/header";
import { BlogsProvider } from "@/context/blogContext";
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <BlogsProvider>
        <Header />
        {children}
      </BlogsProvider>
    </>
  );
};

export default Layout;
