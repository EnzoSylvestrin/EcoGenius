'use client';

import Image from "next/image";

import { motion } from "framer-motion";

import { Heading } from "../Utility/Heading";
import { Text } from "../Utility/Text";

const About = () => {
    return (
        <section className="flex items-center justify-center flex-col py-10">
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
                    <Text align="center" className='leading-relaxed w-[90%] md:!text-start'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sunt
                        magnam odio officia soluta eaque veniam totam cumque, atque, commodi quod non
                        deserunt! Aperiam, ad nesciunt esse id distinctio possimus? <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
                        aut provident sunt, repudiandae in placeat repellat! Beatae eius nostrum
                        optio quibusdam, maiores repellat nobis minima quo quas neque nulla hic?
                    </Text>
                </motion.div>
            </div>
        </section>
    );
}

export default About;