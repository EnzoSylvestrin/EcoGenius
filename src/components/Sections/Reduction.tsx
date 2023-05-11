'use client';

import { motion } from "framer-motion";

import { Bus, Lightbulb, Lightning } from "@phosphor-icons/react";

import { Heading } from "../Utility/Heading";
import ReductionCard from "../Utility/ReductionCard";

const Reduction = () => {
    return (
        <section className="flex items-center justify-center flex-col py-10" id="reduct">
            <Heading align="center" className={'mb-6'} colored>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    viewport={{ once: true }}
                >
                    Caminhos para a redução
                </motion.p>
            </Heading>
            <div className="w-full flex items-stretch gap-4 justify-center flex-col px-4 md:gap-2 md:px-0 md:flex-row">
                <ReductionCard
                    Icon={Lightning}
                    Text="O Brasil tem um grande potencial para a geração de energias renováveis,
                    como a energia eólica, solar e hidráulica. O uso dessas fontes de energia
                    pode reduzir significativamente as emissões de gás carbônico, uma vez que
                    não há liberação de dióxido de carbono na atmosfera."
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.40 }}
                    viewport={{ once: true }}
                />
                <ReductionCard
                    Icon={Bus}
                    Text="O transporte coletivo é responsável por uma grande parcela das emissões 
                    de gases de efeito estufa no Brasil. A redução dessas emissões pode ser alcançada 
                    através da implementação de sistemas de transporte público mais eficientes, como 
                    trens e metrôs, e também pela promoção do uso de bicicletas e caminhadas."
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.40, delay: 0.20 }}
                    viewport={{ once: true }}
                />
                <ReductionCard
                    Icon={Lightbulb}
                    Text="Outra forma de reduzir as emissões de dióxido de carbono é através da 
                    promoção da eficiência energética. Isso pode ser alcançado através do uso de 
                    tecnologias mais eficientes em prédios, indústrias e sistemas de transporte."
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.40, delay: 0.40 }}
                    viewport={{ once: true }}
                />
            </div>
        </section>
    );
}

export default Reduction;