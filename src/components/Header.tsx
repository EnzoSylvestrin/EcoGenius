import clsx from "clsx";

import Logo from '@/assets/LogoEco.png';

import { Heading } from "./Heading";
import { Theme } from "./Theme";
import { Text } from "./Text";

const Header = () => {
    return (
        <header id="page-top">
            <nav className={clsx(
                "w-full h-[10vh] min-h-[60px] border-b-main border-b-2 pb-1 flex items-center",
                "justify-between sticky top-0 transition-all duration-300 bg-gray-200 dark:bg-neutral-800"
            )}>
                <a href="#page-top" className="flex items-center justify-center gap-1 ml-4">
                    <img src={Logo.src} className="h-14" />
                    <Heading colored>EcoGenius</Heading>
                </a>
                <div className="flex items-center justify-center mr-4">
                    <Theme />
                    <div className="h-6 w-[2px] mx-3 bg-gray-400" />
                    <ul className="list-none flex items-center gap-4">
                        <Listitem text="Home" />
                        <Listitem text="Calculadora" />
                    </ul>
                </div>
            </nav>
        </header>
    );
}

const Listitem = ({ text }: { text: string }) => {
    return (
        <li className={clsx(
            "after:block after:w-full after:border-b-[2px] after:ease-in-out after:duration-[320ms] after:scale-0",
            "after:border-b-main hover:after:scale-100 hover:after:h-auto",
            "cursor-pointer"
        )}>
            <Text size="lg">{text}</Text>
        </li>
    )
}

export default Header;