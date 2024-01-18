import { MongoClient } from 'mongodb';

const URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const DB_COLLECTION = process.env.DB_COLLECTION;
const DB_SESSIONS = process.env.DB_SESSIONS;
//-------------User store--------------//
const mongoClient = new MongoClient(URL);

const db = mongoClient.db(DB_NAME);
const userStore = db.collection(DB_COLLECTION);
const sessionStore = db.collection(DB_SESSIONS);

export { userStore, sessionStore };
