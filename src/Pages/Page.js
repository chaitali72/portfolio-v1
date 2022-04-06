import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Social from "../Social/social";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "../Theme/theme";
import { BsSun } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
function Page() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Social />
        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span
              aria-label="Light mode"
              role="img"
              className="theme-button d-inline-block  text-white bg-base-color"
            >
              <BsSun className="btn-darkmoon" />
            </span>
          ) : (
            <span
              aria-label="Dark mode"
              role="img"
              className="theme-button d-inline-block  text-white bg-base-color"
            >
              <BsSunFill />
            </span>
          )}
        </button>
      </>
    </ThemeProvider>
  );
}

export default Page;
