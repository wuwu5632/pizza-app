import React from "react";
import { menu, Menu } from "@/data";
import Image from "next/image";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 h-[calc(100vh-4rem)] md:h-[calc(100vh-9rem)] lg:px-20 xl:px-40 items-center">
      {/* SINGLE MENU ITEM */}
      {menu.map((menu: Menu) => (
        <Link
          key={menu.id}
          className="w-full h-1/3 md:h-[75%] bg-cover bg-right md:bg-top p-4 md:p-8"
          style={{ backgroundImage: `url(${menu.img})` }}
          href={`/menu/${menu.slug}`}
        >
          {/* Text */}
          <div className={`w-1/2 text-${menu.color}`}>
            <h1 className="text-2xl md:text-3xl font-bold uppercase">
              {menu.title}
            </h1>
            <p className="text-sm mt-6">{menu.desc}</p>
            <button
              className={`hidden 2xl:block bg-${menu.color} text-${
                menu.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md mt-2`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
