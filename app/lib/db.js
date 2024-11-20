import { Pool } from 'pg';

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

export async function query(queryText, params) {
    const client = await pool.connect();
    try {
        const res = await client.query(queryText, params);
        return res;
    } finally {
        client.release();
    }
}

export default db;
// import { PrismaClient } from '@prisma/client'

// export const db = new PrismaClient() // Creating a new instance of PrismaClient

/* import mysql from 'mysql2/promise'



const pool = mysql.createPool({
  connectionLimit: 40,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Export a helper function to execute database queries
export async function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve([results]);
    });
  });
}

export default pool;
 */