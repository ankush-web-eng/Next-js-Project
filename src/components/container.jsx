import React from "react";

function Container(props) {
  return (
    <div className="rounded-lg flex flex-col justify-center align-center bg-white shadow-xl text-black px-3 py-2 cursor-pointer">
        <img src={props.image} alt="" className="rounded-md h-32 w-48 p-1" />
        <h1 className="text-serif font-semibold p-1">{props.name}</h1>
        <p className="text-italic flex justify-start p-1">{props.para}</p>
        <div className="flex flex-row p-2 justify-between">
            <h1 className="font-bold text-2xl left-0 ml-1">{props.price}</h1>
            <button className="bg-blue-500 rounded-full text-white hover:bg-black right-0 mr-1 hover:text-white px-2 py-1">Buy</button>
        </div>
    </div>
  );
}

export default Container;
