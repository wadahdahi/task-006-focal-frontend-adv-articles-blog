import { useState, useEffect } from "react";

export default function ModeToggleButton() {
  const [isLight, setIsLight] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored !== "dark";
    return !document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  return (
    <div
      onClick={() => setIsLight(!isLight)}
      className={`flex items-center justify-between p-1 rounded-full cursor-pointer w-17.5 h-8 transition-colors duration-300 ${
        isLight ? "bg-black" : "bg-white"
      }`}
    >
      <img
        src={
          isLight
            ? "/icons/toggle-sun-light.png"
            : "/icons/toggle-moon-dark.png"
        }
        width={20}
        height={20}
        alt="theme-icon"
      />
      <img
        src={
          isLight
            ? "/icons/toggle-circle-light.png"
            : "/icons/toggle-circle-dark.png"
        }
        width={20}
        height={20}
        alt="theme-circle"
      />
    </div>
  );
}
