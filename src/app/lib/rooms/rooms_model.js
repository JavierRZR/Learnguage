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


export {
    fetchAllRooms,
    fetchSomeRooms
};