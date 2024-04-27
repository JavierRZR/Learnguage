"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Input from "./Input";
import Select from "./Select";
import { useState } from "react";

const FilterByOptions = [
    { id: 1, name: 'Id' },
    { id: 2, name: 'Lenguaje' },
    { id: 3, name: 'Creador' }
]


export default function FiltersBox() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [filterBy, setFilterBy] = useState(null);
    const [filterField, setFilterField] = useState(null);

    const changeFilters = (filter) => {
        //Asign filter to URL
        const params = new URLSearchParams(searchParams);
        filter ? params.set('filterBy', filter) : params.delete('filterBy')
        params.delete('query') &&
        replace(`${pathname}?${params.toString()}`)

        //Replace filter input
        setFilterBy(prev => {
            return filter
        });

        const elem = FilterByOptions.find(elem => elem.id == filter)
        elem && setFilterField(prev => elem.name)
        elem || setFilterField(null);
    }

    const changeQuery = (filter) => {
        //Asign filter to URL
        const params = new URLSearchParams(searchParams);
        filter ? params.set('query', filter) : params.delete('query')

        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <section className={`
        w-full max-w-screen-xl
        flex flex-col justify-around items-center gap-x-24 gap-y-5 `}>
            <h1 className="self-start md:mx-0 lg:mx-0 text-2xl font-medium">Explora las salas!</h1>
            {/* <form className={`bg-neutral-900 rounded-xl
            w-full md:w-auto lg:w-auto px-10 py-10 
            flex flex-col md:flex-row lg:flex-row gap-x-24 gap-y-10 `}>

                <Select id="filterBy" name={"Filtrar por"} type="select"
                    options={FilterByOptions}
                    handleChange={(filter) => {
                        changeFilters(Number(filter));
                    }} />

                {filterField && <Input className='bg-stone-300 text-neutral-800' id="filterField" name={filterField} type="text"
                    handleChange={(filter) => changeQuery(filter)} />}
            </form> */}
        </section>
    )
}
