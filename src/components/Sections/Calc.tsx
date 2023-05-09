'use client';

import { Bus, CarProfile, Lightning, Wind } from "@phosphor-icons/react";

import { motion } from 'framer-motion';

import clsx from "clsx";

import Calculator from "@/assets/lottie/Calculator.json";

import { Heading } from "../Utility/Heading";
import { Button } from "../Utility/Button";
import { Input } from "../Utility/Input";
import Player from "../Utility/Player";
import { Text } from "../Utility/Text";
import CalcButton from "../Utility/CalcButton";

const Calculadora = () => {

    const Icons = [
        Lightning,
        CarProfile,
        Bus,
        Wind
    ];

    return (
        <section className="flex items-center justify-center flex-col py-10">
            <Heading align="center" className={'mb-4'} colored>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true }}
                >
                    Calcule sua pegada de carbono!
                </motion.p>
            </Heading>
            <div className="w-full flex items-center justify-center gap-2">
                {
                    Icons.map((element, i) => {
                        return (
                            <motion.div
                                initial={{ y: i % 2 === 0 ? -30 : 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <CalcButton Icon={element} />
                            </motion.div>
                        )
                    })
                }
            </div>
            <div className="w-full flex items-center justify-around">
                <motion.div
                    className="grid place-content-center"
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true }}
                >
                    <Player
                        src={Calculator}
                        style={{
                            width: '380px',
                            height: '380px'
                        }}
                    />
                </motion.div>
                <motion.div
                    className={clsx(
                        `w-[50%] min-w-[200px] max-w-[350px] bg-gray-200 dark:bg-neutral-800 flex gap-4 items-center 
                        flex-col px-2 py-4 rounded-lg transition-colors duration-300`
                    )}
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true }}
                >
                    <Heading align="center">Calcule</Heading>
                    <label htmlFor="car" className="w-[90%]">
                        <Text>Litros por kilometro:</Text>
                        <Input.Root>
                            <Input.Icon icon={CarProfile} />
                            <Input.Input type="text" id="car" placeholder="l/km" />
                        </Input.Root>
                    </label>
                    <label htmlFor="another" className="w-[90%] mb-1">
                        <Text>Litros por kilometro:</Text>
                        <Input.Root>
                            <Input.Icon icon={CarProfile} />
                            <Input.Input type="text" id="another" placeholder="l/km" />
                        </Input.Root>
                    </label>
                    <Button text="Calcular" className="my-2" />
                </motion.div>
            </div>
        </section>
    );
}

export default Calculadora;