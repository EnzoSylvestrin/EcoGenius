'use client';

import { InputHTMLAttributes, ReactNode } from 'react';

import { Icon as IconProsphor } from '@phosphor-icons/react';

import { Icon } from './Icon';
import { SelectProps } from './Select';
import { SelectComponent } from './Select';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface InputRootProps {
    children: ReactNode,
}

function InputRoot({ children }: InputRootProps) {
    return (
        <div className='flex items-center gap-2 px-2 py-1 rounded min-w-16 h-10 bg-gray-300 text-xs placeholder:text-gray-400 focus-within:ring-2 ring-green-600 dark:bg-gray-800'>
            {children}
        </div>
    );
}

InputRoot.displayName = 'Input.Root';

export interface IconProps {
    icon: IconProsphor,
    colored?: boolean,
}

function InputIcon({ icon, colored = true }: IconProps) {
    return (
        <Icon icon={icon} colored={colored} />
    )
}

InputIcon.displayName = 'Input.Icon'

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    register: any,
}

function InputInput({ register, name, ...props }: InputInputProps) {
    return (
        <input
            className='bg-transparent w-full caret-secondary text-darkColor text-sm outline-none placeholder:text-gray-400 dark:text-lightColor'
            {...register(name)}
            name={name}
            {...props}
        />
    )
}

InputInput.displayName = 'Input.Input'

const InputSelect = ({ ...props }: SelectProps) => {
    return (
        <SelectComponent {...props} />
    )
}

export const Input = {
    Root: InputRoot,
    Icon: InputIcon,
    Select: InputSelect,
    Input: InputInput
}