import { useState } from "react";

import { Pixelify_Sans } from "next/font/google";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { DocsSidebarNav } from "@/components/ui/sidebar/sidebar";

import { SIDEBAR_ITEMS } from "@/lib/utils";

const pixelifySans = Pixelify_Sans({ subsets: ["latin"], display: "swap" });

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Menubar className="justify-between fixed top-0 w-full h-12 z-50 bg-white border-none shadow-none p-4">
        <h1 className={`${pixelifySans.className} text-4xl`}>ChatBot</h1>
        <MenubarMenu>
          <MenubarTrigger>Profile</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>View Profile</MenubarItem>
            <MenubarItem>Logout</MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex flex-row pt-12 w-full h-full overflow-hidden">
        <div className="w-1/5 h-full overflow-y-auto mt-4">
          <DocsSidebarNav items={SIDEBAR_ITEMS} />
        </div>
        <div className="w-4/5 overflow-y-auto rounded-lg border-2 m-4 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2)] border-gray-800 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
