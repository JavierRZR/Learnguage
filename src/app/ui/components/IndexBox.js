"use client"

import { useState } from "react"
import Button from "./Button"
import Input from "./Input"

export default function IndexBox() {

    let username = null;

    const getUsername = (name) => {
        username = name;
    }

    return (
        <section className={`
        bg-neutral-900
        px-10 py-10
        flex flex-col items-center md:flex-row lg:flex-row 
        gap-x-24 gap-y-10
        rounded-xl
        `}>

            <form className="md:w-[300px] lg:w-[300px]">
                <Input id="userName" name={"Nombre"} type="text" handleChange={(name) => getUsername(name)}>
                    <p className="text-stone-300/70 text-xs">
                        Introduce tu nombre para que te reconozcan, únete a salas creadas por otras personas o crea la tuya propia!
                    </p>
                </Input>
            </form>
            <div className="flex flex-col gap-5 w-full md:w-[300px] lg:w-[300px]">
                <Button variant="primary" className="">Buscar salas</Button>
                <Button variant="secondary" className="">Crear una sala</Button>
            </div>

        </section>
    )
}
