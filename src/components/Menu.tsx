"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import { UserContext } from "@/useContext/userContext";
import { IUserContext } from "@/useContext/userContext";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "working hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const { menuOpen, setMenuOpen } = useContext(UserContext) as IUserContext; // use type assertion to access menuOpen and setMenuOpen

  const user = false;
  return (
    <div>
      {!menuOpen ? (
        <Image
          src="/open.png"
          alt="menu"
          width={20}
          height={20}
          onClick={() => setMenuOpen(true)}
        />
      ) : (
        <div onClick={() => setMenuOpen(false)}>
          <Image src="/close.png" alt="menu" width={20} height={20} />
          <div className="bg-red-500 text-white absolute right-0 top-24 w-1/2 flex flex-col  gap-8 text-3xl z-20 p-4 overflow-auto h-[calc(100vh-6rem)] ">
            {links.map((link) => (
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            ))}
            {!user ? (
              <Link href="/login">Login</Link>
            ) : (
              <Link href="/orders">Orders</Link>
            )}
            <Link href="/cart">
              <CartIcon />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;