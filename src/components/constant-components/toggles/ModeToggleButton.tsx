import { useState, useEffect } from "react";

const icons = {
  light: {
    main: "/icons/toggle-sun-light.png",
    knob: "/icons/toggle-circle-light.png",
  },
  dark: {
    main: "/icons/toggle-moon-dark.png",
    knob: "/icons/toggle-circle-dark.png",
  },
};

function ThemeIcon({
  theme,
  type,
}: {
  theme: "light" | "dark";
  type: "main" | "knob";
}) {
  return <img src={icons[theme][type]} alt="" className="w-5 h-5" />;
}

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

  useEffect(() => {
    Object.values(icons).forEach((set) =>
      Object.values(set).forEach((src) => {
        const img = new Image();
        img.src = src;
      })
    );
  }, []);

  const theme = isLight ? "light" : "dark";

  return (
    <div
      onClick={() => setIsLight(!isLight)}
      className={`flex items-center justify-between p-1 rounded-full cursor-pointer w-17.5 h-8 transition-colors duration-300 ${
        isLight ? "bg-black" : "bg-white"
      }`}
    >
      <ThemeIcon theme={theme} type="main" />
      <ThemeIcon theme={theme} type="knob" />
    </div>
  );
}
