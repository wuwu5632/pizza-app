import Image from "next/image";
import React from "react";

const CartPage = () => {
  // Cart items data
  const cartItems = [
    {
      id: 1,
      name: "Margherita",
      size: "Medium",
      price: 12.99,
      image: "/temporary/p1.png",
    },
    {
      id: 2,
      name: "Pepperoni",
      size: "Large",
      price: 15.99,
      image: "/temporary/p1.png",
    },
    {
      id: 3,
      name: "Veggie",
      size: "Small",
      price: 10.99,
      image: "/temporary/p1.png",
    },
    {
      id: 4,
      name: "Hawaiian",
      size: "Medium",
      price: 13.99,
      image: "/temporary/p1.png",
    },
    {
      id: 5,
      name: "Buffalo Chicken",
      size: "Large",
      price: 16.99,
      image: "/temporary/p1.png",
    },
    {
      id: 6,
      name: "BBQ Chicken",
      size: "Small",
      price: 11.99,
      image: "/temporary/p1.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* Cart Items List */}
      <div className="flex-1 overflow-auto p-4 lg:px-10 xl:px-20">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-6 p-2 
              even:bg-gray-100 odd:bg-gray-50
            "
          >
            <div className="flex items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                layout="fixed"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>{item.size}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold">${item.price}</span>
              <button className="ml-4 text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Checkout Summary */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-4 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>
              ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Total</span>
            <span className="font-bold">
              ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </span>
          </div>
          <button className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-700 mt-4">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
