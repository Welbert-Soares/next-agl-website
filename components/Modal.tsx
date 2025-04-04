import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SquarePlay } from "lucide-react";
import { Button } from "./ui/button";

const Modal = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant={"btn_secondary"}
          className="w-40 h-14 font-semibold border-none rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1"
        >
          <span>ASSISTA</span>
          <SquarePlay size={20} />

          <DropdownMenuContent className="w-94">
            <div className="w-full relative z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
              <div className="w-full bg-black/55 rounded-lg shadow-lg transition-opacity duration-300">
                <div className="w-full">
                  <iframe
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96"
                    src="https://www.youtube.com/embed/SJbU1bMiS88?si=Qm8_y2MlB6voybh5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export { Modal };
