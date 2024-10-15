"use client";
import { Briefcase, HomeIcon, BookUser } from "lucide-react";
import { Button } from "./ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Link from "next/link";


const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      {/* Menu Items */}
      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href="/">
            <HomeIcon size={18} />
            Início
          </Link>
        </Button>
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href="/about">
            <BookUser size={18} />
            Sobre
          </Link>
        </Button>
        <Button className="justify-start gap-2" variant="ghost" asChild>
          <Link href="/services">
            <Briefcase size={18} />
            Projetos
          </Link>
        </Button>
      </div>
    </SheetContent>
  );
};

export default SidebarSheet;
