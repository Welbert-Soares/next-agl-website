import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Menu, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems } from "@/constants/routes";

const MenuToogle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleRouteChange = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <div className="md:hidden flex items-center justify-center">
      <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
        <DropdownMenuTrigger className="flex items-center justify-center w-10 h-10  text-white focus:outline-none">
          {isOpen ? <X /> : <Menu />}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`w-40 flex flex-col justify-center font-semibold`}
        >
          {navItems.map((route, i) => (
            <DropdownMenuItem
              key={i}
              onClick={() => handleRouteChange(route.href)}
              className={`${
                pathname === route.href ? "text-secondary" : "text-slate-400"
              }`}
            >
              {route.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { MenuToogle };
