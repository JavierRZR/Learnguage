"use client"


export default function Input({ id, name, type, handleChange, children }) {


    return (
        <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor={id}
                className="text-stone-300 text-sm">
                {name}
            </label>
            <input id={id} type={type} placeholder="#MPA Mamutardo"
                className="p-2 rounded-md bg-stone-300 text-neutral-800 
                outline outline-neutral-300
                 hover:outline-neutral-300/80 
                 focus:outline-emerald-300/50 focus:outline-2
                 transition-all"
                onChange={(e) => handleChange(e.target.value)} />
            {children}
        </div>
    )
}
