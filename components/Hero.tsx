import React from "react";

import { MoveRight } from "lucide-react";

import { Heading } from "./Heading";
import { Button } from "./ui/button";
import { Modal } from "./Modal";
const Hero = () => {
  return (
    <div className="bg-blue-950">
      <section>
        <div>
          <div>
            <Heading
              subtitle="Bem vindo a AGL"
              title="Associação Artística e Assistencial"
            />
            <p className="text-white font-normal">
              A Associação Artística e Assistencial AGL é uma organização
              dedicada ao ensino de artes em geral para crianças carentes em
              toda a região. Nosso objetivo é proporcionar acesso à educação
              artística, estimulando a criatividade e o desenvolvimento pessoal
              de jovens talentos, promovendo inclusão e oportunidades para um
              futuro brilhante.
            </p>
          </div>
        </div>
      </section>

      <div>
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
