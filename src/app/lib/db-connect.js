import { Client } from 'pg';
import { env } from '../../../next.config';


const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Only for development, consider more secure options for production
    },
});

const connectDB = async () => {
    try {
        await db.connect();
        console.log('PostgreSQL Connected');
    } catch (error) {
        console.error(`Error connecting to PostgreSQL: ${error.message}`);
        process.exit(1);
    }
};

// connectDB();
export default db;
export { connectDB };