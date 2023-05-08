'use client';

import { CarProfile } from "@phosphor-icons/react";

import { Input } from "../Utility/Input";
import { Heading } from "../Utility/Heading";
import clsx from "clsx";

const Calculadora = () => {
    return (
        <section className="flex items-center justify-center flex-col py-10">
            <Heading align="center" className={'mb-6'} colored>Calcule sua pegada de carbono!</Heading>
            <div className={clsx(
                `w-[50%] min-w-[300px] max-w-[450px] bg-gray-200 dark:bg-neutral-800 flex gap-4 items-center 
                flex-col px-2 py-4 rounded-lg transition-colors duration-300`
            )}>
                <label htmlFor="car" className="w-[90%]">
                    <Input.Root>
                        <Input.Icon icon={CarProfile} />
                        <Input.Input type="text" id="car" placeholder="l/km" />
                    </Input.Root>
                </label>
                <label htmlFor="another" className="w-[90%]">
                    <Input.Root>
                        <Input.Icon icon={CarProfile} />
                        <Input.Input type="text" id="another" placeholder="l/km" />
                    </Input.Root>
                </label>
            </div>
        </section>
    );
}

export default Calculadora;