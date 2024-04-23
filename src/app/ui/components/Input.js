"use client"


export default function Input({ id, name, type, value, handleChange, children, className, placeholder }) {


    return (
        <div className={`w-full flex flex-col gap-2`}>
            <label htmlFor={id}
                className="text-stone-300 text-sm">
                {name}
            </label>
            <input id={id} type={type} placeholder={placeholder} value={value}
                className={`p-2 rounded-md  
                outline outline-neutral-300
                 hover:outline-neutral-300/80 
                 focus:outline-pink-700/50 focus:outline-2
                 transition-all ${className}`}
                onChange={(e) => handleChange(e.target.value)} />
            {children}
        </div>
    )
}
