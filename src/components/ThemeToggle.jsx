import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        storedTheme === 'dark' ? setIsDarkMode(true) : setIsDarkMode(false) 
        if(storedTheme === 'dark'){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            } 
        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [])

    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleTheme = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light")

            }
            return newMode;
        });
    }
    return (
    <button 
        className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full",
            "transition-colors duration-300 focus:outline-hidden"
        )}
    >{
        isDarkMode ? 
        <Sun onClick={toggleTheme} className="h-6 w-6 text-yellow-300" /> : 
        <Moon onClick={toggleTheme} className="h-6 w-6 text-blue-900"/>}
    </button>
         )
}