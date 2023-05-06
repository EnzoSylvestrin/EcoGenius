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

    return (
        <div
            className={`rounded-full p-[6px] cursor-pointer ${!mounted ? '' : !isScrolled ? 'hover:bg-darkHover' : 'hover:bg-lightHover dark:hover:bg-darkHover'}`}
            onClick={ToggleMode}
            data-testid="themeToggler"
        >
            {
                mounted
                    ?
                    <Icon
                        className={`text-xxl transition-all duration-300 ${isScrolled ? 'text-darkColor dark:text-lightColor' : 'text-lightColor'}`}
                        size={28}
                        weight="duotone"
                        data-testid='icon'
                    />
                    :
                    <Skeleton width={28} height={28} className="mb-1" circle />
            }
        </div>
    );
}