'use client';

import { HTMLAttributes, useEffect, useState } from "react";

import { motion } from "framer-motion";

import { useIsMedium } from "@/Hooks/UseMediaQuery";

import { List, X } from "@phosphor-icons/react";

import clsx from "clsx";

import { Theme } from "../Utility/Theme";
import { Text } from "../Utility/Text";
import Logo from "../Utility/Logo";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [Open, setOpen] = useState<boolean>(false);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const isMedium = useIsMedium();

    const ToggleState = () => {
        setOpen(!Open);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);

            if (scrollTop > (prevScrollPos + 20) && isVisible) {
                setIsVisible(false);
            } else if (scrollTop < prevScrollPos && !isVisible) {
                setIsVisible(true);
            }
            setPrevScrollPos(scrollTop);
        };

        setIsScrolled(window.pageYOffset > 0);
        setPrevScrollPos(window.pageYOffset);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible, prevScrollPos]);

    return (
        <motion.header
            className="sticky top-0 z-[999]"
            animate={{
                translateY: Open ? 0 : isVisible ? 0 : '-10vh'
            }}
            transition={{
                duration: 0.2,
            }}
        >
            <nav className={clsx(
                "w-full h-[10vh] min-h-[60px] py-3 flex border-main border-b-2 items-center",
                "transition-all duration-300 px-6",
                isMedium ? isScrolled ? 'bg-gray-200 dark:bg-neutral-800' : 'bg-transparent' : 'bg-gray-200 dark:bg-neutral-800 md:!bg-transparent'
            )}>
                <div className="w-full hidden md:flex items-center justify-between">
                    <a href="#page-top" className="flex items-center justify-center gap-1">
                        <Logo />
                    </a>
                    <div className="flex items-center justify-center">
                        <Theme isScrolled={isScrolled} />
                        <div className="h-6 w-[2px] mx-3 bg-gray-400" />
                        <ul className="list-none flex items-center gap-4">
                            <Listitem isScrolled={isScrolled} text="Home" id="home" />
                            <Listitem isScrolled={isScrolled} text="Entenda" id="whatIs" />
                            <Listitem isScrolled={isScrolled} text="Calculadora" id="calculator" />
                            <Listitem isScrolled={isScrolled} text="Reduzir" id="reduct" />
                        </ul>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center md:hidden">
                    <a href="#page-top" className="flex items-center justify-center gap-1">
                        <Logo />
                    </a>
                    <MenuComponent state={Open} onClick={ToggleState} />
                    <motion.div
                        className={clsx(
                            `fixed top-[10vh] right-0 h-[90vh] flex bg-grayMain w-52 transition-colors duration-300 dark:bg-darkMain`
                        )}
                        initial={{
                            translateX: '208px',
                        }}
                        animate={{
                            translateX: Open ? 0 : '208px'
                        }}
                        transition={{
                            duration: 0.8,
                            type: 'spring',
                        }}
                    >
                        <div className="w-full flex items-center justify-center flex-col relative">
                            <ul className="list-none flex items-center flex-col gap-4">
                                <Listitem isScrolled={isScrolled} text="Home" id="home" />
                                <Listitem isScrolled={isScrolled} text="Entenda" id="whatIs" />
                                <Listitem isScrolled={isScrolled} text="Calculadora" id="calculator" />
                                <Listitem isScrolled={isScrolled} text="Reduzir" id="reduct" />
                            </ul>
                            <div className="absolute bottom-[10px] left-[50%] -translate-x-[50%]">
                                <Theme isScrolled={isScrolled} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </motion.header>
    );
}

type ListItemProps = {
    text: string,
    isScrolled: boolean,
    id: string,
}

const Listitem = ({ text, isScrolled, id }: ListItemProps) => {

    const isMedium = useIsMedium();

    return (
        <a href={`#${id}`}>
            <li className={clsx(
                "after:block after:w-full after:border-b-[2px] after:ease-in-out after:duration-[320ms] after:scale-0",
                "after:border-b-main hover:after:scale-100 hover:after:h-auto uppercase",
                "cursor-pointer"
            )}>
                <Text useLightMode={isScrolled || !isMedium} size="lg">{text}</Text>
            </li>
        </a>
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