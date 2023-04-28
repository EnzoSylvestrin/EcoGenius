import clsx from "clsx";

import { Heading } from "./Heading";

import Logo from '@/assets/LogoEco.png';

const Header = () => {
    return (
        <header>
            <nav className={clsx(
                "w-full h-[10vh] min-h-[60px] border-b-main border-b-2 flex items-center",
                "justify-between sticky top-0"
            )}>
                <div className="flex items-center justify-center gap-1 ml-4">
                    <img src={Logo.src} className="h-14" />
                    <Heading colored>EcoGenius</Heading>
                </div>
            </nav>
        </header>
    );
}

export default Header;