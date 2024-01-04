"use client"
import React from "react";

export default function Header() {

  return (
    <>
      <nav className="bg-violet-500 flex justify-between h-16">
        <img
          className="h-12 w-12 rounded-full my-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotUMC3Rd-rdwJeBYxNiCG6e8RvB_Hq2706A&usqp=CAU"
          alt=""
        />
        <ul className="flex justify-end space-x-6 ltr:px-3 my-4 mr-4">
          <li>
            About
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
}
