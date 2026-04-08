import mysql from 'mysql2/promise';

const dbConfig = {
  host: '34.22.98.158',
  user: 'root',
  password: 'tkdlektkfkd12!',
  database: 'gemini_ops',
  port: 3306,
  connectTimeout: 5000, // 5초 후 타임아웃 강제 발생
};

// 빌드 시점에 커넥션 풀이 생성되어 빌드가 멈추는 것을 방지
export const pool = (process.env.NODE_ENV === 'production' && typeof window === 'undefined' && !process.env.VERCEL) 
  ? null 
  : mysql.createPool(dbConfig);
