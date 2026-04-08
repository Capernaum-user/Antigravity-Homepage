import mysql from 'mysql2/promise';

const dbConfig = {
  host: '34.22.98.158',
  user: 'root',
  password: 'tkdlektkfkd12!',
  database: 'gemini_ops',
  port: 3306,
};

export const pool = mysql.createPool(dbConfig);
