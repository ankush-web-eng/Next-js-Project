"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Header from "@/components/navbar";
import { ThemeProvider } from "@/contexts/theme";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const [failed, setFailed]  = React.useState('')

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Successful", response.data);
      router.push("/profile");
      toast.success("Login Successful!");
    } catch (error) {
      console.log("Login Failed!!");
      setFailed("Incorrect Credentials!!")
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 5 && user.password.length > 7) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

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
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <Header />
      <div className="h-screen flex-col flex justify-center items-center bg-white text-black dark:bg-black dark:text-white">
        <div className="flex-col flex justify-center rounded-lg py-4 px-8 drop-shadow-2xl shadow-stone-400 shadow-2xl mb-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-serif">
              {loading ? "Logging in..." : "Login"}
            </h1>
            <h2 className="text-2xl font-serif text-red-500">{failed}</h2>
          </div>
          <br />
          <label className="pt-2 pb-1">Email</label>
          {/* <br /> */}
          <input
            id="email"
            type="email"
            value={user.email}
            className="py-2 px-2 rounded-lg border-2 border-black drop-shadow-2xl text-black"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label className="pt-2 pb-1">Password</label>
          
          <input
            id="password"
            type="password"
            value={user.password}
            className="py-2  px-2 rounded-lg border-2 border-black drop-shadow-2xl text-black"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <br />
          <div>
            <input
              type="checkbox"
              defaultChecked={remember}
              onChange={(prev) => !prev}
              id="remember"
              className="cursor-pointer "
            />
            <labelc className="px-2" htmlFor="remember">
              Remember me
            </labelc>
          </div>
          <button
            onClick={onLogin}
            className="bg-black border border-gray-300 mb-4 my-2 px-2 py-2 rounded-lg text-white
             hover:bg-gray-300 touch-pinch-zoom active:bg-green-500 hover:text-black drop-shadow-2xl"
          >
            {/* {buttonDisabled ? "No Login" : "Login"} */}Login
          </button>
          <Link className="flex items-center justify-center animate-pulse" href="/signup">
            Visit Signup Page
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}
