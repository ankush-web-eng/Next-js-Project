"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");

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

  const dataFromUser = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-6xl flex justify-center">Profile</h1>
      <p className="text-2xl flex justify-center">{data === "nothing" ? "No Data" : 
        <Link href={`/profile/${data}`}>{data}</Link>
      }</p>
      <button
        onClick={logout}
        className="bg-black border border-gray-300 mb-4 my-4 px-2 py-2 rounded-lg text-white
            hover:bg-white active:bg-red-500 hover:text-black"
      >
        Logout
      </button>
      <button
        onClick={dataFromUser}
        className="bg-black border border-gray-300 mb-4 my-4 px-2 py-2 rounded-lg text-white
            hover:bg-white active:bg-red-500 hover:text-black"
      >
        Show Me
      </button>
    </div>
  );
}
