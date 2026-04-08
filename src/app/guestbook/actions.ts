'use server';

import { pool, initDB } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function getMessages() {
  try {
    await initDB();
    const [rows] = await pool.query(`SELECT * FROM refactoring_heart.guestbook ORDER BY created_at DESC LIMIT 50`);
    return rows as any[];
  } catch (error) {
    console.error("Fetch Error:", error);
    return []; // return empty on connection failure to not break page
  }
}

export async function addMessage(formData: FormData) {
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  if (!name || !message) return { error: 'Name and msg required' };

  try {
    await initDB();
    await pool.query(
      `INSERT INTO refactoring_heart.guestbook (name, message) VALUES (?, ?)`,
      [name, message]
    );
    revalidatePath('/guestbook');
    return { success: true };
  } catch (error) {
    console.error("Insert Error:", error);
    return { error: 'Failed to add message. DB might be unreachable.' };
  }
}

