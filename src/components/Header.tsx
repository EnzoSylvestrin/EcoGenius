'use client';

import { useEffect, useState } from "react";

import clsx from "clsx";

import Logo from '@/assets/LogoEco.png';

import { Heading } from "./Heading";
import { Theme } from "./Theme";
import { Text } from "./Text";
import { useIsMedium } from "@/Hooks/UseMediaQuery";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const isMedium = useIsMedium();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        setIsScrolled(window.pageYOffset > 0);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="page-top" className="sticky top-0 z-[999]">
            <nav className={clsx(
                "w-full h-[10vh] min-h-[60px] py-3 flex border-main border-b-2 items-center",
                "justify-between  transition-all duration-300 px-6",
                isScrolled ? 'bg-gray-200 dark:bg-neutral-800' : 'bg-transparent'
            )}>
                {
                    !isMedium
                        ?
                        <>
                            <div className="w-full flex items-center justify-center">
                                <a href="#page-top" className="flex items-center justify-center gap-1">
                                    <img src={Logo.src} className="h-12" />
                                    <Heading size="sm" colored>EcoGenius</Heading>
                                </a>
                            </div>
                            <div className="fixed top-[10vh] right-0 w-52 h-[90vh] flex bg-grayMain dark:bg-darkMain">
                                <div className="w-full flex items-center justify-center flex-col relative">
                                    <ul className="list-none flex items-center flex-col gap-4">
                                        <Listitem isScrolled={isScrolled} text="Home" />
                                        <Listitem isScrolled={isScrolled} text="Calculadora" />
                                    </ul>
                                    <div className="absolute bottom-[10px] left-[50%] -translate-x-[50%]">
                                        <Theme isScrolled={isScrolled} />
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <a href="#page-top" className="flex items-center justify-center gap-1">
                                    <img src={Logo.src} className="h-12" />
                                    <Heading size="sm" colored>EcoGenius</Heading>
                                </a>
                            </div>
                            <div className="flex items-center justify-center">
                                <Theme isScrolled={isScrolled} />
                                <div className="h-6 w-[2px] mx-3 bg-gray-400" />
                                <ul className="list-none flex items-center gap-4">
                                    <Listitem isScrolled={isScrolled} text="Home" />
                                    <Listitem isScrolled={isScrolled} text="Calculadora" />
                                </ul>
                            </div>
                        </>
                }
            </nav>
        </header>
    );
}

type ListItemProps = {
    text: string,
    isScrolled: boolean,
}

const Listitem = ({ text, isScrolled }: ListItemProps) => {
    return (
        <li className={clsx(
            "after:block after:w-full after:border-b-[2px] after:ease-in-out after:duration-[320ms] after:scale-0",
            "after:border-b-main hover:after:scale-100 hover:after:h-auto uppercase",
            "cursor-pointer"
        )}>
            <Text useLightMode={isScrolled} size="lg">{text}</Text>
        </li>
    )
}

export default Header;