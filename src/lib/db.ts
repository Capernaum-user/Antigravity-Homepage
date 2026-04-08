import mysql from 'mysql2/promise';

const dbConfig = {
  host: '34.22.98.158',
  user: 'root',
  password: 'tkdlektkfkd12!',
  database: 'gemini_ops',
  port: 3306,
  connectTimeout: 5000,
};

let pool: any;

export const getPool = () => {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
};
