import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row  md:h-[70vh] md:justify-between md:bg-[url('/offerBg.png')] ">
      {/* text */}
      <div className="flex flex-col flex-1 items-center justify-center text-center gap-8 p-6">
        <h1 className="text-4xl font-bold xl:text-6xl text-white">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white py-3 px-6 rounded-md">
          {" "}
          Add to Cart
        </button>
      </div>
      {/* image */}
      <div className="relative flex-1 w-full md:h-full ">
        <Image src="/offerProduct.png" alt="offer" fill  className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
