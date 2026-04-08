import mysql from 'mysql2/promise';

async function test() {
  try {
    const connection = await mysql.createConnection({
      host: '34.22.98.158',
      user: 'root',
      password: 'tkdlektkfkd12!',
      port: 3306,
    });
    console.log("Connected successfully!");
    
    // Check if database exists, or create one for our site.
    await connection.query('CREATE DATABASE IF NOT EXISTS refactoring_heart');
    console.log("Database chosen/created.");
    await connection.end();
  } catch(e) {
    console.error("Connection failed:", e.message);
  }
}
test();
