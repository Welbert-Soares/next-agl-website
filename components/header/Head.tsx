import Image from "next/image";
import ButtonAnimated from "./ButtonAnimated";
import { MenuToogle } from "./MenuToogle";
const Head = () => {
  return (
    <div className="flex w-full items-center justify-between p-6">
      <div className="flex items-center gap-3">
        <Image
          src={"/images/AGLLogo.png"}
          alt="logo"
          className="w-10 h-10"
          width={10}
          height={10}
        />

        <div className="flex flex-col">
          <span className="text-normal 2xl:text-2xl text-white font-extrabold">
            AGL
          </span>
          <div className="text-xs 2xl:text-lg text-white font-semibold">
            Associação Artística e Assistencial
          </div>
        </div>
      </div>
      <MenuToogle />
      <ButtonAnimated />
    </div>
  );
};

export { Head };
