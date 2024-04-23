
const BUTTON_CLASS = {
    primary: "bg-pink-700/20 border-neutral-300/20 hover:border-neutral-300/80 hover:bg-pink-700/30 ",
    secondary: "border-neutral-300/20 hover:border-neutral-300/80"
}

export default async function Button({ children, className, variant }) {



    return (
        <button className={`${className} p-2 rounded-md border-2 transition-colors ${BUTTON_CLASS[variant]}`}>
            {children}
        </button>
    )
}
