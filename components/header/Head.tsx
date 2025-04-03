import ButtonAnimated from "./ButtonAnimated";
import { MenuToogle } from "./MenuToogle";
const Head = () => {
  return (
    <div className="flex w-full items-center justify-between p-7">
      <div className="flex items-center gap-3">
        <img
          src={"/images/AGLLogo.png"}
          alt="logo"
          className="w-10 h-10 md:w-16 md:h-16"
          width={10}
          height={10}
        />

        <div className="flex flex-col">
          <span className="text-normal lg:text-4xl text-white font-extrabold">
            AGL
          </span>
          <div className="text-xs lg:text-lg xl:text-lg text-white font-semibold">
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
