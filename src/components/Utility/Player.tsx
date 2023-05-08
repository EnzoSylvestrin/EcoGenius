'use client';

import { Player as PlayerLottie, IPlayerProps } from "@lottiefiles/react-lottie-player";

type PlayerProps = IPlayerProps;

const Player = ({ src: source, ...rest }: PlayerProps) => {

    const OnLoad = () => {
        
    }

    return (
        <PlayerLottie
            src={source}
            autoplay
            loop
            onEvent={event => {
                if (event === 'load') {
                    OnLoad();
                }
            }}
            {...rest}
        />
    );
}

export default Player;