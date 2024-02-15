import React from "react";
import { useState } from "react";

export default function Header(probs) {
  let [category, setCategory] = useState("general");

  return (
    <nav className="flex justify-between  bg-gray-700 text-gray-900 h-16 items-center shadow-lg">
      <h1 className="mx-2 text-white font-black text-xl">News App</h1>
      <ul className="flex mx-2 space-x-8 font-extralight text-white">
        <li
          className="cursor-pointer  rounded hover:font-medium"
          onClick={probs.handleBusiness}
        >
          Business
        </li>
        <li
          onClick={probs.handleTechnology}
          className="cursor-pointer rounded hover:font-medium"
        >
          Technology
        </li>
        <li
          onClick={probs.handleHealth}
          className="cursor-pointer rounded hover:font-medium"
        >
          Health
        </li>
        <li
          onClick={probs.handleSports}
          className="cursor-pointer rounded hover:font-medium"
        >
          Sports
        </li>
      </ul>
    </nav>
  );
}
