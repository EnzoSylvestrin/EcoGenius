import clsx from "clsx";
import { Text } from "../Utility/Text";

const Footer = () => {
    return (
        <footer className={clsx(
            `bg-gray-200 dark:bg-neutral-800 flex justify-between items-center py-3 px-6 
            border-t-2 border-t-main transition-colors duration-300`
        )}>
            <Text>Insert text here</Text>
            <Text>Made by Enzo Sylvestrin</Text>
        </footer>
    );
}

export default Footer;