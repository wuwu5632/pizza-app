import React from "react";
import { pizzas, Product } from "@/data";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = () => {
  console.log(pizzas);
  return (
    <div className="flex flex-wrap  text-red-500">
      {/* one single card */}
      {pizzas.map((item: Product) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="flex flex-col border-b-2 border-r-2 border-red-500 w-full h-[60vh] p-4 sm:w-1/2 lg:w-1/3 group even:bg-fuchsia-50"
        >
          {/* image */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image
                src={item.img}
                alt="item"
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* text */}
          <div className="flex items-center justify-between h-[20%] font-bold">
            <h1 className="text-xl xl:text-2xl uppercase ">
              {item.title}
            </h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block bg-red-500 text-white p-2 rounded-md ">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
