import clsx from "clsx";

import BounceArrow from "@/components/BounceArrow";

import { Heading } from "@/components/Heading";

const Home = () => {
  return (
    <main>
      <section
        className={clsx(
          "absolute top-0 left-0 w-full z-0 bg-[url('/florestBackground.jpg')]",
          "bg-cover bg-no-repeat h-screen flex items-center justify-center"
        )}
        id="Home"
      >
        <div className="absolute w-full z-[1] h-full bg-[rgba(10,_10,_10,_0.6)]" />
        <Heading className='z-[2] uppercase break-words w-[80%]' align="center" useLightMode={false} size="lg">Entenda as consequências da emissão de carbono</Heading>
        <BounceArrow />
      </section>
      <section className="h-[200vh]">
      </section>
    </main >
  )
}

export default Home;

