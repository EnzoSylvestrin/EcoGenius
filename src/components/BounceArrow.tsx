'use client';

import { CaretDown } from "@phosphor-icons/react";

const BounceArrow = () => {
    return (
        <div className="absolute bottom-5 z-10 left-[50%] -translate-x-[50%]">
            <CaretDown size={32} className="text-gray-50 animate-bounce" weight="bold" />
        </div>
    );
}

export default BounceArrow;