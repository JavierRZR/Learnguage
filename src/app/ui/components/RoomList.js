"use server"
import Pagination from "./Pagination"
import RoomCard from "./RoomCard"

import { fetchAllRooms, fetchSomeRooms, getRooms } from '../../lib/rooms/rooms_model'


export default async function RoomList() {

    let rooms = [];
    const numPerPage = 12;
    let page = 1;
    let init = page * numPerPage - numPerPage;
    let end = (page + 1) * numPerPage - numPerPage;

    rooms = (await getRooms(init, end)).data;


    //NO me deja pasarlas a pagination, repensar manera de hacer esto porque ni idea.
    const nextPage = async (newPage) => {
        page = newPage;
        init = page * numPerPage - numPerPage;
        end = (page + 1) * numPerPage - numPerPage;
        salas = (await getRooms(init, end)).data;

    }
    const previousPage = (newPage) => {

    }

    return (
        <>
            <div id="grid-salas" className="w-full max-w-screen-2xl">
                {rooms && rooms.map((sala) => {
                    return <RoomCard key={sala.id} data={sala} />
                })}
            </div>
            <Pagination totalQuantity={rooms.length} quantityPerPage={10} actualPage={page} />
        </>
    )
}
