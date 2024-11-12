"use client";
import React, { useState, useEffect } from "react";
import { Product } from "@/data";

type Props = Pick<Product, "price" | "id" | "options">;

const Price = ({ price, id, options }: Props) => {
  // const [total, setTotal] = useState<number>(price);
  const [selected, setSelected] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  // useEffect(() => {
  //   setTotal(
  //     (options ? price + options[selected].additionalPrice : price) * quantity
  //   );
  // }, [selected, quantity, options, price]);

const total = (options ? price + options[selected].additionalPrice : price) * quantity;


  return (
    <div className="flex flex-col gap-4">
      {/* Total Price  */}
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* size options container */}
      <div className="flex gap-3">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] ring-1 ring-red-400 p-2 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* quantity and add button container */}
      <div className="flex">
        {/* quantity */}
      <div className="flex w-full justify-between p-3 ring-1 ring-red-500 ">
        <span>Quantity</span>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            {"<"}
          </button>
          <span>
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : prev))}
          >
            {">"}
          </button>
        </div>
        </div>
        {/* add to cart button */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500 ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
