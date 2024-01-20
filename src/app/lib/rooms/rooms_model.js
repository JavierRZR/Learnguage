import db from '../db-connect'


const fetchAllRooms = async () => {
    try {
        const result = await db.query('SELECT * FROM rooms');

        let data = result.rows.map(elem => {
            return {
                id: elem.id,
                creatorId: elem.user_id,
                creatorName: elem.user_name,
                description: elem.description,
                langId: elem.lang_id,
                creationDate: elem.created_date,
                maxUsers: elem.max_users,
                numUsers: elem.number_users,
                dificulty: elem.dificulty
            }
        })

        return { status: 'OK', results: data, metadata: {} };
    } catch (error) {
        console.error(`Error executing query: ${error.message}`);
        return { status: 'KO' }
    }
};

const fetchSomeRooms = async () => {
    try {
        const result = await db.query('SELECT * FROM rooms');
        console.log(result.rows); // Your query result
        return { status: 'OK', results: result.rows, metadata: {} };
    } catch (error) {
        console.error(`Error executing query: ${error.message}`);
        return { status: 'KO' }
    }
};

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
    }
]

const getRooms = async (init, end) => {
    let salas = [];

    salas = end <= SALAS.length ? SALAS.splice(init, end) : SALAS.splice(init, SALAS.length);

    return {
        result: 'OK',
        data: salas
    }
}


export {
    fetchAllRooms,
    fetchSomeRooms,
    getRooms
};