import { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import clsx from 'clsx';

type TextProps = {
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg',
    className?: String,
    align?: 'left' | 'center' | 'right',
    colored?: boolean,
    useDarkMode?: boolean,
    useLightMode?: boolean,
}

export const Heading = ({ children, size = 'md', colored, useDarkMode = true, useLightMode = true, className, align = 'left', ...props }: TextProps) => {

    const Comp = children != null ? 'h2' : Slot;

    return (
        <Comp
            className={clsx(
                'font-bold',
                {
                    'text-neutral-900 dark:text-gray-50': useLightMode && useDarkMode,
                    'text-neutral-900': !useDarkMode,
                    'text-gray-50': !useLightMode,
                    'text-xl': size === 'sm',
                    'text-xxl': size === 'md',
                    'text-2xl': size === 'lg',
                    'text-center': align === 'center',
                    'text-right': align === 'right',
                    '!text-main': colored
                },
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}