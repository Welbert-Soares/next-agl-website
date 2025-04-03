import React, { useState } from "react";

import { Menu, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems } from "@/constants/routes";
import Link from "next/link";

const MenuToogle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const routes = navItems;

  return (
    <div className="md:hidden flex items-center justify-center">
      <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
        <DropdownMenuTrigger className="flex items-center justify-center w-10 h-10  text-white focus:outline-none">
          {isOpen ? <X /> : <Menu />}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 flex flex-col justify-center font-semibold">
          {routes.map((route, i) => (
            <Link href={route.href} key={i}>
              <DropdownMenuItem>{route.name}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { MenuToogle };
