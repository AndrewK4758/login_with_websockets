import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

const x = dotenv.config();
console.log(x);

const URL = process.env.DB_URL;

console.log(URL);

const mongoClient = new MongoClient(URL);

const DB_NAME = process.env.DB_NAME;
const DB_COLLECTION = process.env.DB_COLLECTION;

const db = mongoClient.db(DB_NAME);
const userStore = db.collection(DB_COLLECTION);

export default userStore;
