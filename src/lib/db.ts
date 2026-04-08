import mysql from 'mysql2/promise';

// In Next.js, we should cache the pool globally to prevent creating connections on every refresh in dev
const globalForMySQL = global as unknown as { mysqlPool: mysql.Pool };

export const pool =
  globalForMySQL.mysqlPool ||
  mysql.createPool({
    host: '34.22.98.158',
    user: 'root',
    password: 'tkdlektkfkd12!',
    port: 3306,
    // Provide a fallback database in case we need to isolate. For now we use the default or a specified one.
    // If database doesn't exist, Next.js server will fail. We'll omit `database` and specify it in queries if needed,
    // or we assume it exists if the user created it. But since this is a new app, we should probably initialize it.
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 5000,
  });

if (process.env.NODE_ENV !== 'production') globalForMySQL.mysqlPool = pool;

// Helper to initialize table
export async function initDB() {
  try {
    const connection = await pool.getConnection();
    await connection.query(`CREATE DATABASE IF NOT EXISTS refactoring_heart`);
    await connection.query(`USE refactoring_heart`);
    await connection.query(`
      CREATE TABLE IF NOT EXISTS guestbook (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    connection.release();
  } catch (error) {
    console.error("Failed to initialize database:", error);
  }
}
