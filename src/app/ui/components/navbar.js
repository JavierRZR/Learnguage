"use server"

export default async function Navbar() {
    return (
        <nav id="header-nav" className={`
        sticky top-0 
        p-5 w-full 
        flex flex-col items-center justify-between
        rounded-md`}>
            <h1 className={`text-stone-300 text-[2rem] font-semibold tracking-widest`}>
                Learnguage
            </h1>
        </nav>
    )
}
