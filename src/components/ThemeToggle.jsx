import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="text-muted-foreground hover:text-foreground"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.6, rotate: theme === "light" ? 90 : -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.6, rotate: theme === "light" ? -90 : 90, opacity: 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        className="h-5 w-5"
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;