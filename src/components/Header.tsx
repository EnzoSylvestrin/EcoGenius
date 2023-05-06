'use client';

import { HTMLAttributes, useEffect, useState } from "react";

import clsx from "clsx";

import Logo from '@/assets/LogoEco.png';

import { Heading } from "./Heading";
import { Theme } from "./Theme";
import { Text } from "./Text";
import { useIsMedium } from "@/Hooks/UseMediaQuery";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [State, setState] = useState<boolean>(false);

    const isMedium = useIsMedium();

    const ToggleState = () => {
        setState(!State);
    }

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
        <header className="sticky top-0 z-[999]">
            <nav className={clsx(
                "w-full h-[10vh] min-h-[60px] py-3 flex border-main border-b-2 items-center",
                "transition-all duration-300 px-6",
                isMedium ? isScrolled ? 'bg-gray-200 dark:bg-neutral-800' : 'bg-transparent' : 'bg-gray-200 dark:bg-neutral-800 md:!bg-transparent'
            )}>
                <div className="w-full hidden md:flex items-center justify-between">
                    <a href="#page-top" className="flex items-center justify-center gap-1">
                        <Image src={Logo.src} width={38} height={48} alt="Logo ecoGenius" quality={100} />
                        <Heading size="sm" colored>EcoGenius</Heading>
                    </a>
                    <div className="flex items-center justify-center">
                        <Theme isScrolled={isScrolled} />
                        <div className="h-6 w-[2px] mx-3 bg-gray-400" />
                        <ul className="list-none flex items-center gap-4">
                            <Listitem isScrolled={isScrolled} text="Home" />
                            <Listitem isScrolled={isScrolled} text="Calculadora" />
                        </ul>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center md:hidden">
                    <a href="#page-top" className="flex items-center justify-center gap-1">
                        <Image src={Logo.src} width={38} height={48} alt="Logo ecoGenius" quality={100} />
                        <Heading size="sm" colored>EcoGenius</Heading>
                    </a>
                    <MenuComponent state={State} onClick={ToggleState} />
                </div>
                <div className={`fixed top-[10vh] right-0 h-[90vh] flex bg-grayMain transition-all duration-300 ease-in w-52 dark:bg-darkMain ${State ? 'translate-0' : 'translate-x-[208px]'}`}>
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

type MenuComponentProps = HTMLAttributes<HTMLDivElement> & {
    state: boolean;
}

const MenuComponent = ({ state, className, ...rest }: MenuComponentProps) => {

    let Icon = state ? X : List;

    return (
        <div
            className={clsx(
                `absolute top right-[3%] flex items-center justify-center rounded-md p-1 cursor-pointer
                hover:bg-lightHover dark:hover:bg-darkHover`
            )}
            {...rest}
        >
            <Icon
                size={26}
            />
        </div>
    );
}


export default Header;