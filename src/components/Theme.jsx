import { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { div } from "framer-motion/m";
function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button
      onClick={() =>
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
      }
      className={`fixed bottom-12 right-12 flex size-12 items-center justify-center rounded-full text-center text-2xl ${theme === "dark" ? "bg-white" : "bg-black"}`}
    >
      {theme === "dark" ? (
        <div className="text-black">
          {" "}
          <MdSunny />
        </div>
      ) : (
        <IoMoon className="text-white" />
      )}
    </button>
  );
}

export default Theme;
