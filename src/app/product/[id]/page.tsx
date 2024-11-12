import React from "react";
import { singleProduct } from "@/data";
import Img from "next/image";
import Price from "@/components/Price";

const SingleProductPage = () => {
  return (
    <div className="flex flex-col h-screen gap-4 p-4 lg:px-20 xl:p-40 text-red-500 sm:flex-row sm:items-center md:gap-8">
      {/* image container */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Img
            src={singleProduct.img}
            alt="item"
            fill
            className="object-contain"
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="flex flex-col h-1/2 gap-4 md:gap-6 xl:gap-8 md:h-[70%] md:justify-center">
        <h1 className="text-3xl xl:text-5xl uppercase font-bold">
          {singleProduct.title}
        </h1>
        <p className=" text-red-400">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
