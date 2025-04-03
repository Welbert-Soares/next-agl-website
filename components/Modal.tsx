import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export { Modal };
