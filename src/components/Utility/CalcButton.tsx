import { Icon } from "@phosphor-icons/react";
import clsx from "clsx";

type CalcButtonProps = {
    Active: boolean,
    Icon: Icon
};

const CalcButton = ({ Icon, Active }: CalcButtonProps) => {
    return (
        <div className={clsx(
            "bg-gray-300 dark:bg-slate-800 p-2 rounded-full border-none cursor-pointer",
            "hover:!bg-main transition-all duration-300 group",
            {
                '!bg-main hover:!bg-green-600': Active
            }
        )}>
            <Icon
                size={20}
                className={`text-main group-hover:text-white ${Active ? 'text-white' : ''}`}
                weight="fill"
            />
        </div>
    );
}

export default CalcButton;