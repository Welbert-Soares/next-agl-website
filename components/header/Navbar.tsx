"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { navItems } from "@/constants/routes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const pathname = usePathname();

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
          : "px-7 transition-all duration-300 ease-in-out hidden md:flex"
      }
    >
      <nav className="w-full flex justify-between bg-[#ffffff31] rounded-lg">
        <ul className="flex justify-between items-center px-7 py-5 gap-7 list-none font-semibold">
          {scroll ? (
            <img src={"/images/AGLLogo.png"} className="w-8 h-8" alt="" />
          ) : null}

          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? "text-secondary" : "text-slate-300"
                } `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`bg-[#312f92] text-white px-[70px] py-7 clip-custom ${
            scroll ? "rounded-r-none" : "rounded-lg"
          }`}
        >
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
