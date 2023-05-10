import clsx from "clsx";

import { Icon as IconPhosphor } from "@phosphor-icons/react";

type IconProps = {
    icon: IconPhosphor,
    size?: string | number,
    colored?: boolean,
    className?: string,
    useDarkMode?: boolean,
    weight?: 'fill' | 'duotone' | 'bold' | 'regular' | 'thin' | 'bold'
}

export const Icon = ({ icon: IconComponent, weight = "regular", size = 28, colored, className, useDarkMode = true }: IconProps) => {
    return (
        <IconComponent
            className={clsx(
                colored
                    ? 'text-main fill-main'
                    : `text-darkColor fill-darkColor ${useDarkMode ? 'dark:text-lightColor dark:fill-lightColor' : ''}`,
                className
            )}
            weight={weight}
            size={size}
        />
    );
}