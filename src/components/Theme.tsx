'use client';
import { useEffect, useState } from "react";

import { MoonStars, Sun } from "@phosphor-icons/react";

export const Theme = () => {

    const [darkMode, setdarkMode] = useState<boolean>(true);

    const ToggleMode = () => {
        setdarkMode(!darkMode);
        setTheme(darkMode ? 'light' : 'dark');
        document.body.style.setProperty('--bgColor', darkMode ? '#ececec' : '#333333');
        document.body.style.setProperty('--colorInverse', darkMode ? '#333333' : '#ececec');
        localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    }

    useEffect(() => {
        let theme = localStorage.getItem('theme');
        setdarkMode(theme == null ? true : theme === 'dark' ? true : false);
        setTheme(theme == null ? 'dark' : theme === 'dark' ? 'dark' : 'light');
        document.body.style.setProperty('--bgColor', theme != "light" ? '#333333' : '#ececec');
        document.body.style.setProperty('--colorInverse', theme != "light" ? '#ececec' : '#333333');
    }, []);

    const setTheme = (theme: 'dark' | 'light') => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }
    }

    const Icon = darkMode ? Sun : MoonStars;

    return (
        <div
            className="rounded-full p-[6px] cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover"
            onClick={ToggleMode}
            data-testid="themeToggler"
        >
            <Icon
                className="text-darkColor text-xxl transition-all duration-300 dark:text-lightColor"
                size={28}
                weight="duotone"
                data-testid='icon'
            />
        </div>
    );
}