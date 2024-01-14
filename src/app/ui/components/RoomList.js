import Pagination from "./Pagination"
import RoomCard from "./RoomCard"

const SALAS = [
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'es' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'gb' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'cn' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 87978,
        room_id: "1278361278361-21341234-12341234",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
]

export default async function RoomList() {
    return (
        <>
            <div id="grid-salas" className="w-full max-w-screen-2xl">
                {SALAS && SALAS.map((sala) => {
                    return <RoomCard key={sala.id} data={sala} />
                })}
            </div>
            <Pagination />
        </>
    )
}
