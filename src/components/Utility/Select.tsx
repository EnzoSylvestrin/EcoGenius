'use client';

import React, { ChangeEvent, ReactNode, useState } from 'react';

import clsx from 'clsx';

import { motion, useIsomorphicLayoutEffect } from 'framer-motion';

import * as Select from '@radix-ui/react-select';

import { Check, CaretDown, CaretUp } from "@phosphor-icons/react";

import { Icon } from './Icon';
import { FormatText } from '@/Utils/Commom';

export type SelectProps = {
    placeholder: string,
    items: string[],
    id: string,
    selected?: boolean,
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement> | string) => void
};

export const SelectComponent = ({ placeholder, items, id, selected = false, value, onChange }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);

    const handleSelectOpen = (open: boolean) => {
        if (open) {
            setIsOpen(true);
        }
    };

    const handleSelectClose = () => {
        setIsOpen(false);
    };

    useIsomorphicLayoutEffect(() => {
        setShow(true);
    }, []);

    return (
        <Select.Root
            required
            onOpenChange={(open) => handleSelectOpen(open)}
            value={value}
            onValueChange={onChange}
        >
            <Select.Trigger
                className="flex items-center justify-between text-sm h-full w-full bg-transparent text-darkColor dark:text-lightColor outline-none"
                aria-label={placeholder}
                id={id}
            >
                <Select.Value {...(selected ? { defaultValue: items[0] } : { placeholder: placeholder })} />
                <Select.Icon>
                    <Icon icon={CaretDown} weight='bold' size={24} colored />
                </Select.Icon>
            </Select.Trigger>
            <motion.div
                className='z-[1032]'
                animate={{
                    opacity: show ? isOpen ? 1 : 0 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{
                    visibility: show ? 'visible' : 'hidden',
                    position: 'relative'
                }} // Hide the content during server-side rendering
            >
                <Select.Content
                    onCloseAutoFocus={handleSelectClose}
                    className="max-h-96 w-96 scroll-auto z-[1032]"
                >
                    <Select.ScrollUpButton className="flex border-t rounded-t-lg border-b-slate-300 items-center justify-center h-5 py-4 cursor-pointer">
                        <Icon icon={CaretUp} weight='bold' size={24} colored />
                    </Select.ScrollUpButton>
                    <Select.Viewport>
                        <Select.Group>
                            {items.map((element: any, i: number) => {
                                return (
                                    <SelectItem
                                        value={element}
                                        className={
                                            i === 0
                                                ? 'rounded-t-lg'
                                                : i === items.length - 1
                                                    ? 'rounded-b-lg'
                                                    : ''
                                        }
                                        key={i}
                                    >
                                        {FormatText(element)}
                                    </SelectItem>
                                );
                            })}
                        </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex border-t rounded-b-lg border-t-slate-300 items-center justify-center h-5 py-4 bg-white cursor-pointer">
                        <Icon icon={CaretDown} weight='fill' size={24} colored />
                    </Select.ScrollDownButton>
                </Select.Content>
            </motion.div>
        </Select.Root>
    );
};

type SelectItemProps = {
    children: ReactNode;
    value: string;
    className?: string;
};

const SelectItem = React.forwardRef(({ children, className, value }: SelectItemProps, forwardedRef: any) => {
    return (
        <Select.Item
            className={clsx(
                'text-sm text-darkColor w-72 bg-gray-300 dark:bg-slate-800 flex cursor-pointer items-center',
                'h-5 pl-8 py-4 relative select-none data-[disabled]:text-gray-400',
                'data-[disabled]:pointer-events-none data-[highlighted]:outline-none',
                'data-[highlighted]:bg-lightHover data-[highlighted]:text-[var(--main)]',
                'dark:text-lightColor dark:bg-InputColorDark dark:data-[highlighted]:bg-darkHover ',
                className
            )}
            value={value}
            ref={forwardedRef}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-1 w-6 inline-flex items-center justify-center">
                <Icon icon={Check} size={20} colored />
            </Select.ItemIndicator>
        </Select.Item>
    );
});