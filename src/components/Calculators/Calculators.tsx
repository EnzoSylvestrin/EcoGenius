import { motion } from "framer-motion";

import { Bank, Bus, CarProfile, GasCan, LineSegment, Money } from "@phosphor-icons/react";

import clsx from "clsx";

import Swal from "sweetalert2";

import { useForm, Controller } from "react-hook-form";

import { Heading } from "../Utility/Heading";
import { Button } from "../Utility/Button";
import { Input } from "../Utility/Input";
import { Text } from "../Utility/Text";

type EletricityProps = {
    metrica: string,
    value: number
}

export const CalcEletricity = () => {

    const { register, handleSubmit, control } = useForm<EletricityProps>();

    const OnSubmit = (data: EletricityProps) => {
        Swal.fire(`Submited: ${data.metrica} / ${data.value}`);
    }

    return (
        <motion.form
            className={clsx(
                `w-[50%] min-w-[260px] max-w-[350px] bg-gray-200 dark:bg-neutral-800 flex gap-4 items-center 
                        flex-col px-2 py-4 rounded-lg transition-colors duration-300  shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px,_rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]`
            )}
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(OnSubmit)}
        >
            <Heading align="center">Calcule</Heading>
            <label htmlFor="metrica" className="w-[90%]">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Selecione a métrica:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={Bank} />
                    <Controller
                        name='metrica'
                        control={control}
                        render={({ field }) =>
                            <Input.Select
                                id="metrica"
                                placeholder="Selecione a metrica..."
                                items={["R$/Mês", "kWh/Mês"]}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        }
                    />
                </Input.Root>
            </label>
            <label htmlFor="value" className="w-[90%] mb-1">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Valor:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={Money} />
                    <Input.Input type="number" register={register} name="value" id="value" placeholder="100,00" />
                </Input.Root>
            </label>
            <Button type="submit" text="Calcular" className="my-2" />
        </motion.form>
    );
}

type GasProps = {
    metrica: string,
    value: number
}

export const CalcGas = () => {

    const { register, handleSubmit, control } = useForm<GasProps>();

    const OnSubmit = (data: GasProps) => {
        Swal.fire(`Submited: ${data.metrica} / ${data.value}`);
    }

    return (
        <motion.form
            className={clsx(
                `w-[50%] min-w-[260px] max-w-[350px] bg-gray-200 dark:bg-neutral-800 flex gap-4 items-center 
                flex-col px-2 py-4 rounded-lg transition-colors duration-300  shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px,_rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]`
            )}
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(OnSubmit)}
        >
            <Heading align="center">Calcule</Heading>
            <label htmlFor="metrica" className="w-[90%]">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Selecione a métrica:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={Bank} />
                    <Controller
                        name='metrica'
                        control={control}
                        render={({ field }) =>
                            <Input.Select
                                id="metrica"
                                placeholder="Selecione a metrica..."
                                items={["R$/Mês", "M³/Mês", "Quantidade de botijões/Mês"]}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        }
                    />
                </Input.Root>
            </label>
            <label htmlFor="value" className="w-[90%] mb-1">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Valor:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={Money} />
                    <Input.Input type="number" register={register} name="value" id="value" placeholder="100,00" />
                </Input.Root>
            </label>
            <Button type="submit" text="Calcular" className="my-2" />
        </motion.form>
    );
}

type CarProps = {
    transporte: string,
    combustivel: string,
    kilometragem: number
}

export const CalcCar = () => {

    const { register, control, handleSubmit } = useForm<CarProps>();

    const OnSubmit = (data: CarProps) => {
        Swal.fire(`Submited: ${data.transporte} / ${data.combustivel} / ${data.kilometragem}`);
    }

    return (
        <motion.form
            className={clsx(
                `w-[50%] min-w-[260px] max-w-[350px] bg-gray-200 dark:bg-neutral-800 flex gap-4 items-center 
                flex-col px-2 py-4 rounded-lg transition-colors duration-300 shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px,_rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]`
            )}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(OnSubmit)}
        >
            <Heading align="center">Calcule</Heading>
            <label htmlFor="car" className="w-[90%]">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Tipo de transporte:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={CarProfile} />
                    <Controller
                        name='transporte'
                        control={control}
                        render={({ field }) =>
                            <Input.Select
                                id="transporte"
                                placeholder="Selecione o veículo"
                                items={["Moto", "Carro", "Bicicleta"]}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        }
                    />
                </Input.Root>
            </label>
            <label htmlFor="combustivel" className="w-[90%]">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Combustível:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={GasCan} />
                    <Controller
                        name='combustivel'
                        control={control}
                        render={({ field }) =>
                            <Input.Select
                                id={'combustivel'}
                                placeholder={"Selecione o combustível"}
                                items={["Gasolina", "Etanol"]}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        }
                    />
                </Input.Root>
            </label>
            <label htmlFor="kilometragem" className="w-[90%] mb-1">
                <Text>
                    <motion.p
                        initial={{ y: -40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Kilometragem mensal:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={LineSegment} />
                    <Input.Input type="number" register={register} name="kilometragem" id="kilometragem" placeholder="45,2" />
                </Input.Root>
            </label>
            <Button type="submit" text="Calcular" className="my-2" />
        </motion.form>
    );
}

type BusProps = {
    transporte: string,
    kilometragem: number
}

export const CalcBus = () => {

    const { register, control, handleSubmit } = useForm<BusProps>();

    const OnSubmit = (data: BusProps) => {
        Swal.fire(`Submited: ${data.transporte} / ${data.kilometragem}`);
    }

    return (
        <motion.form
            className={clsx(
                `w-[50%] min-w-[260px] max-w-[350px] bg-gray-200 dark:bg-neutral-800 flex gap-4 items-center 
                    flex-col px-2 py-4 rounded-lg transition-colors duration-300  shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px,_rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset]`
            )}
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(OnSubmit)}
        >
            <Heading align="center">Calcule</Heading>
            <label htmlFor="car" className="w-[90%]">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Tipo de transporte:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={Bus} />
                    <Controller
                        name='transporte'
                        control={control}
                        render={({ field }) =>
                            <Input.Select
                                id="car"
                                placeholder="Selecione o veículo"
                                items={["Metrô", "Trem", "Ônibus", "Táxi"]}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        }
                    />
                </Input.Root>
            </label>
            <label htmlFor="kilometragem" className="w-[90%] mb-1">
                <Text>
                    <motion.p
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.34 }}
                        viewport={{ once: true }}
                    >
                        Kilometragem mensal:
                    </motion.p>
                </Text>
                <Input.Root>
                    <Input.Icon icon={LineSegment} />
                    <Input.Input type="number" register={register} name="kilometragem" id="kilometragem" placeholder="45,2" />
                </Input.Root>
            </label>
            <Button type="submit" text="Calcular" className="my-2" />
        </motion.form>
    );
}