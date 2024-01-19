import { MongoClient } from 'mongodb';
import MongoStore from 'connect-mongo';

const URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const DB_COLLECTION = process.env.DB_COLLECTION;
const DB_SESSIONS = process.env.DB_SESSIONS;

const mongoClient = new MongoClient(URL);

const db = mongoClient.db(DB_NAME);
const userStore = db.collection(DB_COLLECTION);
const sessionStore = MongoStore.create({
	client: mongoClient,
	dbName: DB_NAME,
	collectionName: DB_SESSIONS,
	autoRemove: 'native',
	stringify: false,
});

export { userStore, sessionStore };
