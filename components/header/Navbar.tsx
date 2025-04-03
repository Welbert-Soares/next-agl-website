"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { navItems } from "@/constants/routes";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scroll
          ? "scroll-header hidden md:flex"
          : "px-6 transition-all duration-300 ease-in-out hidden md:flex"
      }
    >
      <nav className="w-full flex justify-between bg-[#ffffff31]">
        <ul className="flex justify-between items-center px-7 py-5 gap-5 list-none">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link href={item.href} className={"text-slate-300 text-normal"}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-[#312f92] text-white px-[70px] py-7 clip-custom">
          <div className=" text-center button bg-primary-800 text-white font-semibold border-none rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:bg-primary-900 ">
            <Link href="/donate" className="flex">
              DOE AGORA
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
