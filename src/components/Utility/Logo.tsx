import Image from "next/image";

import LogoImage from '@/assets/LogoEco.png';

import { Heading } from "./Heading";

const Logo = () => {
    return (
        <>
            <Image src={LogoImage.src} width={38} height={48} alt="Logo ecoGenius" quality={100} />
            <Heading size="sm" colored>EcoGenius</Heading>
        </>
    );
}

export default Logo;