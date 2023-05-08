import clsx from "clsx";

import { Icon as IconPhosphor } from "@phosphor-icons/react";

type IconProps = {
    icon: IconPhosphor,
    size?: string | number,
    colored?: boolean,
    className?: string,
    useDarkMode?: boolean,
}

export const Icon = ({ icon: IconComponent, size = 28, colored, className, useDarkMode = true }: IconProps) => {
    return (
        <IconComponent
            className={clsx(
                colored
                    ? 'text-main fill-main'
                    : `text-darkColor fill-darkColor ${useDarkMode ? 'dark:text-lightColor dark:fill-lightColor' : ''}`,
                className
            )}
            size={size}
        />
    );
}