"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import ProfileNav from "@/components/profileNav";
import Container from "@/components/container";import { ThemeProvider } from "@/contexts/theme";
``

export default function ProfilePage() {
  // const router = useRouter();
  // const [data, setData] = React.useState("nothing");

  // const logout = async () => {
  //   try {
  //     const response = await axios.get("/api/users/logout");
  //     console.log(response.data);
  //     toast.success("Logout Successful!!");
  //     router.push("/login");
  //   } catch (error) {
  //     console.log(error.message);
  //     toast.error(error.message);
  //   }
  // };

  // const dataFromUser = async () => {
  //   const res = await axios.get("/api/users/me");
  //   console.log(res.data);
  //   setData(res.data.data.username);
  // };

  const [themeMode, setThemeMode] = React.useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <ProfileNav />
      <div className="h-screen flex flex-col justify-center text-black bg-white dark:bg-black dark:text-white">
        <div className="flex flex-row justify-around top-4">
          <Container
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotUMC3Rd-rdwJeBYxNiCG6e8RvB_Hq2706A&usqp=CAU"
            para="My name is Abhay Gupta"
            name='Abhay'
            price='$199'
          />
          <Container
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotUMC3Rd-rdwJeBYxNiCG6e8RvB_Hq2706A&usqp=CAU"
            para="My name is Khushi"
            name="Khushi"
            price='$199'
          />
          <Container
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotUMC3Rd-rdwJeBYxNiCG6e8RvB_Hq2706A&usqp=CAU"
            para="My name is Harshit"
            name='Harshit'
            price='$199'
          />
          <Container
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotUMC3Rd-rdwJeBYxNiCG6e8RvB_Hq2706A&usqp=CAU"
            para="My name is Ankush"
            name='Ankush'
            price='$199'
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

{/* <h1 className="text-6xl flex justify-center">Profile</h1>
<p className="text-2xl flex justify-center">
  {data === "nothing" ? (
    "No-Data"
  ) : (
    <Link href={`/profile/${data}`}>({data})</Link>
  )}
</p>
<button
  onClick={dataFromUser}
  className="bg-black border border-gray-300 mb-4 my-4 px-2 py-2 rounded-lg text-white
    hover:bg-white active:bg-red-500 hover:text-black"
>
  Show Me
</button> */}