import clsx from "clsx";
import { Text } from "../Utility/Text";

const Footer = () => {
    return (
        <footer className={clsx(
            `bg-gray-200 dark:bg-neutral-800 flex flex-col justify-between items-center py-3 px-6 
            border-t-2 border-t-main transition-colors duration-300 gap-1 mdxs:flex-row mdxs:gap-0`
        )}>
            <Text align="center">Direitos reservados para EcoGenius</Text>
            <Text align="center"><a href="https://portfolio-enzosylvestrin.vercel.app">By: Enzo Sylvestrin</a></Text>
        </footer>
    );
}

export default Footer;