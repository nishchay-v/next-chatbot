import { useState } from "react";

import { Pixelify_Sans } from "next/font/google";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DocsSidebarNav } from "@/components/ui/sidebar/sidebar";

const SIDEBAR_ITEMS = [
  {
    items: [
      {
        title: "+ New Chat",
        href: "/chats/new",
      },
      {
        title: "Chat 1",
        href: "/chats/1",
      },
      {
        title: "Chat 2",
        href: "/chats/2",
      },
      {
        title: "Chat 3",
        href: "/chats/3",
      },
    ],
  },
];

const pixelifySans = Pixelify_Sans({ subsets: ["latin"], display: "swap" });

// menu with a drawer trigger, app title and a profile menu
export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Menubar className="justify-between fixed top-0 w-full h-12 z-50 bg-white border-none shadow-none">
        <h1 className={`${pixelifySans.className} mx-2 text-4xl`}>ChatBot</h1>
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
        <div className="w-1/5 h-full overflow-y-auto">
          <DocsSidebarNav items={SIDEBAR_ITEMS} />
        </div>
        <div className="w-4/5 h-full overflow-y-auto rounded-lg border-l-2 border-t-2 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.2)] border-gray-800 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
