"use client";
import React, {useEffect} from "react";
import useTheme from "@/contexts/theme";
import { ThemeProvider } from "@/contexts/theme";

export default function Header() {
  let { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const [themeMode1, setThemeMode1] = React.useState("light");

  darkTheme = () => {
    setThemeMode1("dark");
  };

  lightTheme = () => {
    setThemeMode1("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode1);
  }, [themeMode1]);


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <nav className="bg-white flex justify-between h-16 dark:bg-black dark:text-white">
        <img
          className="h-12 w-12 rounded-full my-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotUMC3Rd-rdwJeBYxNiCG6e8RvB_Hq2706A&usqp=CAU"
          alt=""
        />
        <ul className="flex justify-end space-x-6 ltr:px-3 my-4 mr-4">
          <li className=" cursor-pointer font-serif drop-shadow-1xl py-1 ease-in-out duration-500 rounded-full hover:bg-blue-400 hover:text-white px-2">
            About
          </li>
          <li className=" cursor-pointer font-serif drop-shadow-1xl py-1 ease-in-out duration-500 rounded-full hover:bg-blue-400 hover:text-white px-2">
            Contact
          </li>
          <li>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode1 === "dark"}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium ">
                Toggle Theme
              </span>
            </label>
          </li>
        </ul>
      </nav>
    </ThemeProvider>
  );
}
