'use client';

import { useEffect, useState } from "react";

import { useTheme } from "@wits/next-themes";

import { MoonStars, Sun } from "@phosphor-icons/react";

import Skeleton from "./Skeleton";

export const Theme = ({ isScrolled }: { isScrolled: boolean }) => {

    const [mounted, setMounted] = useState(false);

    const { theme, setTheme } = useTheme();

    const Icon = theme === 'dark' ? Sun : MoonStars;

    const ToggleMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Skeleton width={32} height={32} circle />
        )
    }

    return (
        <div
            className={`rounded-full p-[6px] cursor-pointer ${!isScrolled ? 'hover:bg-darkHover' : 'hover:bg-lightHover dark:hover:bg-darkHover'}`}
            onClick={ToggleMode}
            data-testid="themeToggler"
        >
            <Icon
                className={`text-xxl transition-all duration-300 ${isScrolled ? 'text-darkColor dark:text-lightColor' : 'text-lightColor'}`}
                size={28}
                weight="duotone"
                data-testid='icon'
            />
        </div>
    );
}