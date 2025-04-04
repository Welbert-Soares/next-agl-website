"use client";

import AboutCard from "@/components/AboutCard";
import { Header } from "@/components/header/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutCard />
    </div>
  );
}
