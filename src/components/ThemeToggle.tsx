import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
