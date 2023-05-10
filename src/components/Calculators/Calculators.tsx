import { motion } from "framer-motion";

import { CarProfile } from "@phosphor-icons/react";

import clsx from "clsx";

import { Input } from "../Utility/Input";
import { Text } from "../Utility/Text";
import { Heading } from "../Utility/Heading";
import { ReactNode } from "react";
import { Button } from "../Utility/Button";

export const CalcWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            className={clsx(
                `w-[50%] min-w-[260px] max-w-[350px] bg-gray-200 dark:bg-neutral-800 flex gap-4 items-center 
                        flex-col px-2 py-4 rounded-lg transition-colors duration-300`
            )}
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
        >
            <Heading align="center">Calcule</Heading>
            {children}
            <Button text="Calcular" className="my-2" />
        </motion.div>
    )
}

export const CalcEletricity = () => {
    return (
        <>
            <label htmlFor="car" className="w-[90%]">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Carros por km:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={CarProfile} />
                    <Input.Input type="text" id="car" placeholder="l/km" />
                </Input.Root>
            </label>
            <label htmlFor="another" className="w-[90%] mb-1">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Carros por km:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={CarProfile} />
                    <Input.Input type="text" id="another" placeholder="l/km" />
                </Input.Root>
            </label>
        </>
    );
}

export const CalcCar = () => {
    return (
        <>
            <label htmlFor="car" className="w-[90%]">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Carros por km:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={CarProfile} />
                    <Input.Input type="text" id="car" placeholder="l/km" />
                </Input.Root>
            </label>
            <label htmlFor="another" className="w-[90%]">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Carros por km:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={CarProfile} />
                    <Input.Select id={''} placeholder={"teste"} items={['teste', 'oi']} />
                </Input.Root>
            </label>
            <label htmlFor="another" className="w-[90%] mb-1">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Carros por km:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={CarProfile} />
                    <Input.Input type="text" id="another" placeholder="l/km" />
                </Input.Root>
            </label>
        </>
    );
}
