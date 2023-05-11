import { Icon } from "@phosphor-icons/react";

import clsx from "clsx";

import { motion, MotionProps } from 'framer-motion';

import { useIsMedium } from "@/Hooks/UseMediaQuery";

import { Text } from "./Text";

type ReductionCardProps = MotionProps & {
    Icon: Icon,
    Text: string,
}

const ReductionCard = ({ Icon, Text: text, ...rest }: ReductionCardProps) => {

    const isMedium = useIsMedium();

    return (
        <motion.div
            className={clsx(
                "w-full p-4 flex items-center justify-center rounded-lg flex-col mdxs:flex-row border-2 border-main",
                "shadow-[rgba(0,0,0,0.3)_0px_19px_38px,_rgba(0,0,0,0.22)_0px_15px_12px] md:w-[30%]",
                "md:flex-col md:py-2"
            )}
            {...rest}
        >
            <Icon size={isMedium ? 42 : 54} className="text-main my-2 w-[20%] md:w-auto" />
            <Text align="center" className={'break-words flex-1 px-4 md:w-auto md:px-[10%]'}>
                {text}
            </Text>
        </motion.div>
    );
}

export default ReductionCard;