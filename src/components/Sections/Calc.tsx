'use client';

import { CarProfile } from "@phosphor-icons/react";

import clsx from "clsx";

import Calculator from "@/assets/lottie/Calculator.json";

import { Heading } from "../Utility/Heading";
import { Input } from "../Utility/Input";
import Player from "../Utility/Player";
import { Button } from "../Utility/Button";

const Calculadora = () => {
    return (
        <section className="flex items-center justify-center flex-col py-10">
            <Heading align="center" className={'mb-6'} colored>Calcule sua pegada de carbono!</Heading>
            <div className="w-full flex items-center justify-around">
                <div className="grid place-content-center">
                    <Player
                        src={Calculator}
                        style={{
                            width: '380px',
                            height: '380px'
                        }}
                    />
                </div>
                <div className={clsx(
                    `w-[50%] min-w-[200px] max-w-[350px] bg-gray-200 dark:bg-neutral-800 flex gap-4 items-center 
                    flex-col px-2 py-4 rounded-lg transition-colors duration-300`
                )}>
                    <Heading className='mb-1' align="center">Calcule</Heading>
                    <label htmlFor="car" className="w-[90%]">
                        <Input.Root>
                            <Input.Icon icon={CarProfile} />
                            <Input.Input type="text" id="car" placeholder="l/km" />
                        </Input.Root>
                    </label>
                    <label htmlFor="another" className="w-[90%] mb-1">
                        <Input.Root>
                            <Input.Icon icon={CarProfile} />
                            <Input.Input type="text" id="another" placeholder="l/km" />
                        </Input.Root>
                    </label>
                    <Button text="Calcular" />
                </div>
            </div>
        </section>
    );
}

export default Calculadora;