"use client";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import React, { useEffect } from "react";
import { UserContext } from "@/useContext/userContext";
import { IUserContext } from "@/useContext/userContext";
import { useContext } from "react";

const Home = () => {
  const { menuOpen } = useContext(UserContext) as IUserContext;

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  return (
    <div className={`relative ${menuOpen ? 'filter brightness-75 pointer-events-none' : ''} min-h-screen overflow-auto `}>
      <main>
        <Slider />
        <Featured />
        <Offer />
      </main>
      {menuOpen && <div className="absolute inset-0 bg-black bg-opacity-50"></div>}
    </div>
  );
};

export default Home;