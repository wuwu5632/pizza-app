"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:flex-row relative  -z-10">
      {/* TEXT CONTENT */}
      <div className="flex flex-col flex-1 items-center justify-center gap-8 font-bold text-red-500">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl">
          {data[currentIndex].title}
        </h1>
        <button className="bg-red-500 text-white px-8 py-4">Contact me</button>
      </div>
      {/* IMAGE CONTENT */}
      <div className="flex-1 relative">
        <Image
          src={data[currentIndex].image}
          alt="slides"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
