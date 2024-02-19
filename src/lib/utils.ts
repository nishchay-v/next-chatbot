import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SIDEBAR_ITEMS = [
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
