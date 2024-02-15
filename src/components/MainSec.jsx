import React from "react";
import CardSec from "./CardSec";
import Spinner from "./Spinner";

export default function MainSec(probs) {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen w-full h-full flex-col">
        {probs.isLoad && <Spinner/>}
      <CardSec data={probs.data}/>
    </div>
  );
}
