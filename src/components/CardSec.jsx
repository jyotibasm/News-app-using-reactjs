import React from "react";
import Card from "./Card";

export default function CardSec(probs) {

   let newsData = probs.data.map(item =>{
    return <Card data={item}/>
  })
  return (
    <div className="w-3/5 grid grid-cols-3 h-full overflow-y-scroll">
      {newsData}
    </div>
  );
}
