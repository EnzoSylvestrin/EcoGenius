'use client';

import Image from "next/image";

import { motion } from "framer-motion";

import { Heading } from "../Utility/Heading";
import { Text } from "../Utility/Text";

const About = () => {
    return (
        <section className="flex items-center justify-center flex-col py-10" id="whatIs">
            <Heading align="center" className={'mb-6'} colored>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true }}
                >
                    O que é a pegada de carbono?
                </motion.p>
            </Heading>
            <div className="flex items-center justify-center flex-col-reverse md:flex-row">
                <motion.div
                    className="relative w-full p-2 flex items-center justify-center md:w-[50%]"
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.35, type: 'spring' }}
                    viewport={{ once: true }}
                >
                    <Image
                        className="drop-shadow-2xl"
                        src="/factory.png"
                        alt="Fábrica"
                        width={400}
                        height={300}
                    />
                </motion.div>
                <motion.div
                    className="w-full flex mb-4 items-center justify-center flex-col md:w-[50%]"
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.35, type: 'spring' }}
                    viewport={{ once: true }}
                >
                    <Heading align="center">Entenda</Heading>
                    <Text size="sm" align="center" className='leading-relaxed w-[90%] md:!text-start mt-2'>
                        Segundo PACHECO (2011), o termo “Pegada de Carbono”, é basicamente o número de emissões
                        de Gases de Efeito Estufa, que foi lançado para a atmosfera, provocado pelo consumo de
                        energia e combustível. Então, a pegada de carbono mede a quantidade de CO2 que é emitida pelas
                        pessoas em seu dia a dia.
                        <br /><br />
                        Tudo que utiliza combustíveis fósseis (petróleo, carvão e gás), emite o que é chamado de
                        GEE (gases de efeito estufa), temos como exemplo o CO2, que em excesso, contribui para o
                        aquecimento global. No estado em que se encontra o planeta atualmente, muitas pessoas se
                        preocupam com o preservamento ambiental, então, para a diminuição dos gases emitidos em
                        excesso procuram a redução de suas emissões de carbono, um bom modo para começar a
                        planejar a redução é fazer o cálculo da sua pegada de carbono, ou seja, ver o valor total
                        mensal ou anual de CO2 que foi emitido.
                    </Text>
                </motion.div>
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row mt-4">

                <motion.div
                    className="relative w-full p-2 flex items-center justify-center md:w-[50%]"
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.35, type: 'spring' }}
                    viewport={{ once: true }}
                >
                    <Image
                        className="drop-shadow-2xl"
                        src="/dioxidoDeCarbono.jpg"
                        alt="Fábrica"
                        width={400}
                        height={300}
                    />
                </motion.div>
                <motion.div
                    className="w-full flex mb-4 items-center justify-center flex-col md:w-[50%]"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.35, type: 'spring' }}
                    viewport={{ once: true }}
                >
                    <Heading align="center">O que é Dioxído de carbono?</Heading>
                    <Text size="sm" align="center" className='leading-relaxed w-[90%] md:!text-start mt-2'>
                        de acordo com SILVA, M. et al. (2016, p.01), A emissão do Gás Dióxido de Carbono
                        (CO2) é feito através das queimas de combustíveis fósseis que são derivados do
                        petróleo, como na produção de cimento, conversão de grandes latifúndios para fins
                        agropecuários, desmatamentos e queimadas.
                    </Text>
                </motion.div>
            </div>
        </section >
    );
}

export default About;