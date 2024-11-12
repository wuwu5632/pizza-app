import Image from "next/image";
import React from "react";
import { featuredProducts, Product } from "@/data";

const Featured = () => {
  return (
    <div className="overflow-x-scroll w-screen text-red-500 my-12">
      {/* wrapper */}
      <div className="w-max flex ">
        {featuredProducts.map((product: Product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-around w-full h-screen p-4  hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw]"
          >
            {/* image */}
            {product.img && (
              <div className="flex-1 relative w-full hover:rotate-[60deg] transition-all duration-500">
                <Image
                  src={product.img}
                  alt="featured"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* text */}
            <div className="flex flex-col flex-1 items-center justify-center text-left gap-4">
              <h1 className="text-xl uppercase font-bold pt-4 xl:text-2xl ">
                {product.title}
              </h1>
              <p className="p-4 2xl:p-8 max-w-sm md:max-w-md">{product.desc}</p>
              <span className="text-xl font-bold ">{product.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                {" "}
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
