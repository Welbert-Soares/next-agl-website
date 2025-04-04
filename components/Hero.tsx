import React from "react";

import { MoveRight } from "lucide-react";

import { Button } from "./ui/button";
import { Modal } from "./Modal";
const Hero = () => {
  return (
    <div className="bg-[url(/images/bgImagem.png)] bg-cover bg-right bg-no-repeat h-dvh flex flex-col justify-end md:justify-center items-center pb-24 md:pb-0 gap-6">
      <section className="p-4 md:p-10 ">
        <div className="flex flex-col text-white gap-3">
          <span className="text-lg md:text-xl font-semibold">
            BEM VINDO A AGL
          </span>
          <span className="text-2xl md:text-3xl font-semibold">
            Associação Artística e Assistencial
          </span>
          <p className="text-white font-normal hidden md:flex">
            A Associação Artística e Assistencial AGL é uma organização dedicada
            ao ensino de artes em geral para crianças carentes em toda a região.
            Nosso objetivo é proporcionar acesso à educação artística,
            estimulando a criatividade e o desenvolvimento pessoal de jovens
            talentos, promovendo inclusão e oportunidades para um futuro
            brilhante.
          </p>
        </div>
      </section>

      <div className="flex gap-5">
        <Button
          variant={"btn_primary"}
          className="w-40 h-14 font-semibold border-none rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1"
        >
          <span>SAIBA MAIS</span>
          <MoveRight size={20} />
        </Button>

        <Modal />
      </div>
    </div>
  );
};

export default Hero;
