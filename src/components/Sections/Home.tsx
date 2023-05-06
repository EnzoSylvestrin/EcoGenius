'use client';

import { motion } from 'framer-motion';

import clsx from "clsx";

import BounceArrow from "@/components/Utility/BounceArrow";
import { Heading } from "@/components/Utility/Heading";
import Image from 'next/image';

const Home = () => {
    return (
        <section
            className='h-[90vh]'
            id="Home"
        >
            <div
                className={clsx(
                    "absolute top-0 left-0 w-full z-0",
                    "h-screen flex items-center justify-center"
                )}
            >
                <Image
                    className="absolute top-0 left-0 w-full z-0 object-cover"
                    src='/florestBackground.jpg'
                    alt='floresta de fundo'
                    quality={80}
                    fill
                    priority
                />
                <div className="absolute w-full z-[1] h-full bg-[rgba(10,_10,_10,_0.6)]" />
                <Heading
                    className='z-[2] uppercase break-words w-[80%]'
                    align="center"
                    useLightMode={false}
                    size="lg"
                >
                    <motion.p
                        initial={{ y: 80, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        viewport={{ once: true }}
                    >
                        Entenda as consequências da emissão de carbono
                    </motion.p>
                </Heading>
                <BounceArrow />
            </div>
        </section>
    );
}

export default Home;