'use client';

import { useState } from "react";

import { Bus, CarProfile, Icon, Lightning, Wind } from "@phosphor-icons/react";

import { motion } from 'framer-motion';

import { CalcEletricity, CalcCar, CalcGas, CalcBus } from "../Calculators/Calculators";

import Calculator from '@/assets/lottie/Calculator.json';

import CalcButton from "../Utility/CalcButton";
import Tooltip from "../Utility/Tooltip";
import { Heading } from "../Utility/Heading";
import Player from "../Utility/Player";

type CalculatorsProps = {
    Icon: Icon,
    Text: string,
    Screen: JSX.Element,
    Active: boolean,
}

const Calculadora = () => {

    const [Calculators, setCalculators] = useState<CalculatorsProps[]>([
        { Icon: Lightning, Text: 'Elétrica', Screen: <CalcEletricity />, Active: true },
        { Icon: CarProfile, Text: 'Deslocamento individual', Screen: <CalcCar />, Active: false },
        { Icon: Bus, Text: 'Deslocamento coletivo', Screen: <CalcBus />, Active: false },
        { Icon: Wind, Text: 'Gás', Screen: <CalcGas />, Active: false }
    ]);

    const [active, setActive] = useState<JSX.Element>(<CalcEletricity />);

    const SwitchActive = (Calculator: CalculatorsProps) => {
        setActive(Calculator.Screen);
        setCalculators(prevCalculators => {
            const index = prevCalculators.findIndex(calculator => calculator.Active);
            if (index !== -1) {
                prevCalculators[index].Active = false;
            }
            const updatedCalculators = prevCalculators.map(calculator =>
                calculator === Calculator
                    ? { ...calculator, Active: true }
                    : calculator
            );
            return updatedCalculators;
        });
    };

    return (
        <section className="flex items-center justify-center flex-col py-10" id="calculator">
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
                    Calculators.map((element, i) => {
                        return (
                            <Tooltip
                                key={i}
                                element={
                                    <motion.div
                                        initial={{ y: i % 2 === 0 ? -30 : 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                        viewport={{ once: true }}
                                        onClick={() => SwitchActive(element)}
                                    >
                                        <CalcButton Active={element.Active} Icon={element.Icon} />
                                    </motion.div>
                                }
                                text={element.Text}
                                place="bottom"
                            />
                        )
                    })
                }
            </div>
            <div className="w-full flex items-center justify-around flex-col-reverse mt-4 md:flex-row md:mt-0">
                <motion.div
                    className="place-content-center hidden xs:grid"
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
                {
                    active
                }
            </div>
        </section>
    );
}

export default Calculadora;