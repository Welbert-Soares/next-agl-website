"use client";

import AboutCard from "@/components/AboutCard";
import { Awrapper } from "@/components/Awrapper";
import { CardCourses } from "@/components/CardCourses";
import { Header } from "@/components/header/Header";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import Testimonal from "@/components/Testimonal";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutCard />
      <Awrapper />
      <HomeAbout />
      <CardCourses />
      <Testimonal />
    </div>
  );
}
