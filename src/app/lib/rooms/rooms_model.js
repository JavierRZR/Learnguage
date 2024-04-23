import db from '../db-connect'

const SALAS = [
    {
        id: 1,
        room_id: "1",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 2,
        room_id: "2",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 3,
        room_id: "3",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
    {
        id: 4,
        room_id: "4",
        lang: { id: 1, name: "Japonés", ISO: 'jp' },
        creator: { id: 1, name: "Ricardo" },
        description: "Descripción molona para hacer una prueba de este tostón que es insertar datos en la BBDD.",
        maxUsers: 12,
        users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    }
]

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



const getRooms = async (init, end) => {
    let salas = [];

    // salas = end <= SALAS.length ? SALAS.splice(init, end) : SALAS.splice(init, SALAS.length);
    salas = SALAS;

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