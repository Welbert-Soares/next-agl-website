import React from "react";
import { Head } from "./Head";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full flex flex-col bg-blue-950">
      <Head />
      <Navbar />
    </header>
  );
};

export { Header };
