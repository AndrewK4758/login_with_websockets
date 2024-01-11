import { MongoClient } from 'mongodb';

const URL = `${process.env.DB_URL}`;

const mongoClient = new MongoClient(
	'mongodb+srv://aKlapper:ogvD6BJq4AJiUPGY@cluster0.dehexay.mongodb.net/?retryWrites=true&w=majority'
);

const DB_NAME = process.env.DB_NAME;
const DB_COLLECTION = process.env.DB_COLLECTION;

const db = mongoClient.db(DB_NAME);
const userStore = db.collection(DB_COLLECTION);

export default userStore;
