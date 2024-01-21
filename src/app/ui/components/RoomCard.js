import { languagesConstant } from "@/app/lib/langConstants";
import Link from "next/link";

export default async function RoomCard({ data }) {
    const { id, room_id, lang, creator, description, maxUsers, users } = data;

    return (
        <Link href={`https://learnguage-socketio-server.vercel.app/[id]`} as={`https://learnguage-socketio-server.vercel.app/${id}`}
            className={`m-auto w-[300px] h-[200px] p-5 bg-neutral-900 rounded-md text-neutral-300/90 
        border-[1px]  border-neutral-300/10
        transition-all ease-in-out duration-300 hover:border-neutral-300/50 hover:border-2 hover:scale-105 hover:brightness-125
        grid grid-cols-5 grid-rows-5`}>
            <div className='row-span-2 overflow-hidden my-1 opacity-80'>
                <img className=' rounded-md' src={`/flags4x3/${lang.ISO}.svg`} />
            </div>
            <header className="col-span-4 row-span-2 px-5">
                <p>{lang.name}</p>
                <p className='text-sm font-medium '># {id}</p>
            </header>
            <div className="col-span-3 row-start-3 text-sm ">{creator.name}</div>
            <div className={`col-span-2 col-start-4 row-start-3 text-end ${users.length != maxUsers ? 'text-emerald-300/90' : 'text-red-500/70'}`}>
                {users.length}/{maxUsers}
            </div>
            <p className="col-span-5 row-span-2 row-start-4 font-extralight text-xs">{description}</p>
        </Link>
    )
}
