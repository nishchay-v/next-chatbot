import { useState } from "react";

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
    title: "Chat",
    items: [
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

// menu with a drawer trigger, app title and a profile menu
export default async function AppMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Menubar className="justify-between fixed top-0 w-full h-12">
        <div>Chats</div>
        <MenubarMenu>
          <MenubarTrigger>Profile</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>View Profile</MenubarItem>
            <MenubarItem>Logout</MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {/* <div className="w-full h-full"> */}
      <div className="flex flex-row h-full m-12">
        <div className="w-1/5 overscroll-contain bg-white container">
          <DocsSidebarNav items={SIDEBAR_ITEMS} />
        </div>
        {children}
      </div>
      {/* </div> */}
    </div>
  );
}
