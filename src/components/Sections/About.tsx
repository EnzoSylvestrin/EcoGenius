'use client';

import Image from "next/image";
import { Heading } from "../Utility/Heading";
import { Text } from "../Utility/Text";

const About = () => {
    return (
        <section className="flex items-center justify-center flex-col py-10">
            <Heading className={'mb-6'} colored>O que é pegada de carbono?</Heading>
            <div className="flex items-center justify-center">
                <div className="relative w-[50%] p-2 flex items-center justify-center">
                    <Image
                        src="/factory.png"
                        alt="Fábrica"
                        width={400}
                        height={300}
                    />
                </div>
                <div className="w-[50%] flex items-center justify-center flex-col">
                    <Heading align="center">Entenda</Heading>
                    <Text className='leading-relaxed w-[90%]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sunt
                        magnam odio officia soluta eaque veniam totam cumque, atque, commodi quod non
                        deserunt! Aperiam, ad nesciunt esse id distinctio possimus? <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
                        aut provident sunt, repudiandae in placeat repellat! Beatae eius nostrum
                        optio quibusdam, maiores repellat nobis minima quo quas neque nulla hic?
                    </Text>
                </div>
            </div>
        </section>
    );
}

export default About;