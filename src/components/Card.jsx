import React from "react";

export default function Card(probs) {
  return (
    <div className="w-75 h-90 bg-white mx-2 my-4 rounded-xl shadow-xl px-2 py-4 overflow-hidden">
      <img
        style={{ height: "40%",width:"100%" }}
        src={
          probs.data.urlToImage
            ? probs.data.urlToImage
            : "https://th.bing.com/th/id/OIP.EjAL2jn03BXr8OOlqUFm7gAAAA?rs=1&pid=ImgDetMain"
        }
      />
      <h2 
         style={{ height: "10%",marginBottom:"30px"}} 
      className="text-xl font-bold"
      >{probs.data.title.slice(0,40)+"..."}</h2>
      <p 
       style={{ height: "30%",width:"100%"}} 
      className="">
        {probs.data.description ? String(probs.data.description).slice(0,100)+"...":"This News has no Description, for more details you can visit the original source article, Click Below Link"}
        </p>
      <a
        style={{ height: "10%" }}
        href={probs.data.url}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Read More
      </a>
    </div>
  );
}
