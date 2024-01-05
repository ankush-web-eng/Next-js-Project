"use client"
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProfileNav() {

    const router  = useRouter()

    const logout = async () => {
        try {
          const response = await axios.get("/api/users/logout");
          console.log(response.data);
          toast.success("Logout Successful!!");
          router.push("/login");
        } catch (error) {
          console.log(error.message);
          toast.error(error.message);
        }
      };

  return (
    <>
      <nav className="bg-white flex justify-between h-16">
        <img
          className="h-12 w-12 rounded-full my-2"
          src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotUMC3Rd-rdwJeBYxNiCG6e8RvB_Hq2706A&usqp=CAU"
          alt=""
        />
        <ul className="flex justify-end space-x-6 ltr:px-3 my-4 mr-4">
          <li className="text-black font-serif">
            About
          </li>
          <li className="text-black font-serif">
            Contact
          </li>
          <li className="text-black font-serif">
            <button className="active:text-red-500" onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
      
    </>
  );
}
