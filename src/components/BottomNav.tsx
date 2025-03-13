"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, User, Bookmark, MoreHorizontal } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Projects", icon: LayoutGrid, href: "/projects" },
  { name: "Me", icon: User, href: "/me" },
  { name: "Collections", icon: Bookmark, href: "/collections" },
  { name: "More", icon: MoreHorizontal, href: "/more" },
];

const BottomNav = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-[#D9D9D9] shadow-lg flex justify-around py-3">
      {navItems.map((item) => {
        const isActive = pathname === item.href; // Check if current path matches item href

        return (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center"
          >
            <item.icon
              size={24}
              className={isActive ? "text-red-500" : "text-gray-600"}
            />
            <span
              className={`text-xs ${
                isActive ? "font-bold text-red-500" : "text-gray-600"
              }`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
