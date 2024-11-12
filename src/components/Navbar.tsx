import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between h-12 text-red-500 p-4 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-18 xl:px-40">
      {/* left links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HOMEPAGE</Link>
        <Link href="/menu">MENU</Link>
        <Link href="/">CONTACT</Link>
      </div>
      {/* logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      {/* right links */}
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer px-1 bg-orange-300 rounded-md ">
          <Image src="/phone.png" alt="" width={21} height={21} />
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
