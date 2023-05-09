import { Icon } from "@phosphor-icons/react";
import clsx from "clsx";

type CalcButtonProps = {
    Icon: Icon,
};

const CalcButton = ({ Icon, }: CalcButtonProps) => {
    return (
        <div className={clsx(
            "bg-gray-300 dark:bg-slate-800 p-2 rounded-full border-none cursor-pointer",
            "hover:bg-main transition-all duration-300 group"
        )}>
            <Icon size={20} className="text-main group-hover:text-white" weight="fill" />
        </div>
    );
}

export default CalcButton;