import { Client } from 'pg';


const db = new Client({
    connectionString: 'postgres://fl0user:QCWg1BvA3zZy@ep-black-fog-22548778.eu-central-1.aws.neon.fl0.io:5432/learnguague-db?sslmode=require',
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