import session from 'express-session';
import connectMongodbSession from 'connect-mongodb-session';

const URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const DB_SESSIONS = process.env.DB_SESSIONS;

const MongoDBStore = connectMongodbSession(session);
const sessionStore = new MongoDBStore(
	{
		uri: URL,
		databaseName: DB_NAME,
		collection: DB_SESSIONS,
	},
	(err) => {
		if (err) console.log({ err: err });
	}
);
sessionStore.on('error', (error) => {
	console.log({ message: error });
});

const sessionData = session({
	secret: process.env.SESSION_SEC,
	cookie: {
		secure: true,
		sameSite: 'lax',
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
	store: sessionStore,
	resave: false,
	saveUninitialized: false,
});
export { sessionData, sessionStore };
