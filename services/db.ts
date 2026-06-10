
import Dexie, { type EntityTable } from 'dexie';
import { ChatMessage } from '../types';

interface StoredMessage extends ChatMessage {
  id?: number;
  timestamp: number;
}

const db = new Dexie('BinaryDevChatDB') as Dexie & {
  messages: EntityTable<StoredMessage, 'id'>;
};

// Schema definition
db.version(1).stores({
  messages: '++id, role, text, timestamp'
});

export const saveMessage = async (role: 'user' | 'model', text: string) => {
  await db.messages.add({
    role,
    text,
    timestamp: Date.now()
  });
};

export const getHistory = async () => {
  // 24 hour cleanup: delete records older than 24h
  const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
  await db.messages.where('timestamp').below(twentyFourHoursAgo).delete();
  
  return await db.messages.orderBy('timestamp').toArray();
};

export const clearOldHistory = async () => {
  const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
  await db.messages.where('timestamp').below(twentyFourHoursAgo).delete();
};

export default db;
