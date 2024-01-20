"use server"

export default async function Navbar() {
    return (
        <nav id="header-nav"
            className={`sticky top-0 rounded-md select-none z-50
                p-5 w-full 
                flex flex-col items-center justify-between`}>
            <h1 className={`text-stone-300 text-[2rem] font-semibold tracking-widest`}>
                Learnguage
            </h1>
        </nav>
    )
}
