import React from "react";
import { useState } from "react";

export default function Pagination(probs) {
  

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-between my-5  w-3/5">
        <button
          className="bg-gray-200 w-20 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4  rounded"
          onClick={probs.hanglePrevious}
        >
          {"<"}
        </button>
        <p className="bg-gray-100 font-bold py-2 px-4 rounded-full">{probs.count}</p>
        <button
          onClick={probs.hangleNext}
          className="w-20 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
