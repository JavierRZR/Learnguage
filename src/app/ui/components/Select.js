

export default function Select({ id, name, options, handleChange }) {


    return (
        <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor={id}
                className="text-stone-300 text-sm">
                {name}
            </label>
            <select id={id} name={name}
                onChange={(e) => {
                    const select = e.target;
                    const id = select.children[select.selectedIndex].id;
                    handleChange(id)
                }}
                className="p-2 rounded-md bg-stone-300 text-neutral-800 outline
                 hover:outline-neutral-300/80 
                 focus:outline-pink-700/50 focus:outline-2
                 transition-all">
                <option>Selecciona un filtro</option>
                {options && options.map(({ id, name }, index) => {
                    return <option key={index} className="" id={id}>{name}</option>
                })}
            </select>
        </div>
    )
}
