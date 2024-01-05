"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import  axios  from "axios";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast'
import Header from "@/components/navbar";


export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false)

  const onSignup = async () => {
    try {
        setLoading(true);
        const response = await axios.post("/api/users/signup", user,{
            headers:{
                "Content-Type": "application/JSON"
            }
        });
        console.log(response.data);
        toast.success("Signup Successful!")
        router.push("/login");
    } catch (error) {
        console.log("Signup Failed!!",error.response.data)
        toast.error("Signup Failed")
    }finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 5 &&
      user.password.length > 7
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
    <Header />
    <div className="h-screen flex-col flex justify-center items-center bg-white text-black scroll-smooth">
    <div className="flex-col flex justify-center shadow-2xl py-2 px-12 rounded-lg">
      <h1 className="text-5xl flex justify-center items-center font-serif">{loading?"Processing" : "Signup"}</h1>
      <br />
      <label className="pb-1 pt-3">Username</label>
      {/* <br /> */}
      <input
        id="username"
        type="text"
        value={user.username}
        className="py-2 text-black px-2 rounded-lg border-black border-2 "
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label className="pb-1 pt-3">Email</label>
      {/* <br /> */}
      <input
        id="email"
        type="email"
        value={user.email}
        className="py-2 text-black px-2 rounded-lg border-black border-2"
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label className="pb-1 pt-3">Password</label>
      {/* <br /> */}
      <input
        id="password"
        type="password"
        value={user.password}
        className="py-2 text-black px-2 rounded-lg border-black border-2"
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button
        onClick={onSignup}
        className="bg-black border border-gray-300 mb-4 my-4 px-2 py-2 rounded-lg text-white hover:bg-gray-300 active:bg-green-500 hover:text-black"
      >
        {buttonDisabled?"No signup":"signup"}
      </button>
      <Link className="flex justify-center items-center" href="/login">Visit Login Page</Link>
    </div></div>
    </>
  );
}
